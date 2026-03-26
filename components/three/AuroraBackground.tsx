'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    if (typeof window === 'undefined') return

    const canvas = canvasRef.current
    if (!canvas) return

    // Scene setup
    const renderer = new THREE.WebGLRenderer({ 
      canvas, 
      antialias: true, 
      alpha: true 
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.z = 3

    // Geometry
    const geometry = new THREE.PlaneGeometry(10, 6)

    // Shaders
    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `

    const fragmentShader = `
      uniform float uTime;
      uniform float uScroll;
      uniform vec2 uMouse;
      varying vec2 vUv;

      vec3 mod289(vec3 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
      vec4 mod289(vec4 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
      vec4 permute(vec4 x) { return mod289(((x*34.0)+10.0)*x); }
      vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

      float snoise(vec3 v) {
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0,0.5,1.0,2.0);
        vec3 i = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);
        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - D.yyy;
        i = mod289(i);
        vec4 p = permute(permute(permute(
          i.z + vec4(0.0,i1.z,i2.z,1.0))
          + i.y + vec4(0.0,i1.y,i2.y,1.0))
          + i.x + vec4(0.0,i1.x,i2.x,1.0));
        float n_ = 0.142857142857;
        vec3 ns = n_ * D.wyz - D.xzx;
        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);
        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);
        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);
        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));
        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
        p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
        vec4 m = max(0.6 - vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m*m, vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
      }

      void main() {
        vec2 uv = vUv;
        float t = uTime * 0.15;
        float sc = uScroll;
        vec2 mo = (uMouse - 0.5) * 0.08;
        uv += mo;

        float n1 = snoise(vec3(uv.x*1.1, uv.y*0.7+sc*0.4, t));
        float n2 = snoise(vec3(uv.x*2.8+0.4, uv.y*1.8-sc*0.2, t*1.5));
        float n3 = snoise(vec3(uv.x*6.0, uv.y*5.0, t*2.5))*0.25;
        float n4 = snoise(vec3(uv.x*0.5+sc*0.1, uv.y*0.4, t*0.6))*0.4;
        
        float noise = n1*0.5 + n2*0.28 + n3 + n4;
        noise = noise * 0.5 + 0.5;

        vec3 colA = vec3(0.005, 0.005, 0.015); // Deep Black
        vec3 colB = vec3(0.48, 0.22, 0.93);   // Electric Purple (#7c3aed)
        vec3 colC = vec3(0.23, 0.51, 0.96);   // Electric Blue (#3b82f6)
        vec3 colD = vec3(0.08, 0.05, 0.25);   // Deep Indigo
        vec3 colE = vec3(0.02, 0.04, 0.12);   // Ambient Blue

        float sectionBlend = sin(sc * 3.14159);
        vec3 col = mix(colA, colB, smoothstep(0.2, 0.58, noise));
        col = mix(col, colC, smoothstep(0.58, 0.82, noise)*0.55);
        col = mix(col, colD, smoothstep(0.0, 0.2, noise)*0.5);
        col = mix(col, colE, sectionBlend*0.3);

        float vig = 1.0 - length((uv-0.5)*1.7);
        vig = smoothstep(0.0, 0.85, vig);
        col *= vig;

        float bandY = 0.5 - sc*0.3;
        float band = exp(-pow((uv.y-bandY)*3.5, 2.0))*0.2;
        col += vec3(band*0.35, band*0.12, band*0.22);

        float grid = step(0.998, fract(uv.x*20.0))*0.02 + step(0.998, fract(uv.y*14.0))*0.015;
        col += vec3(grid*(0.3+noise*0.2));

        gl_FragColor = vec4(col, 0.98);
      }
    `

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uScroll: { value: 0 },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      },
      transparent: true,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Interaction handling
    let targetMouse = new THREE.Vector2(0.5, 0.5)
    let currentMouse = new THREE.Vector2(0.5, 0.5)
    let targetScroll = 0
    let currentScroll = 0

    const onMouseMove = (e: MouseEvent) => {
      targetMouse.x = e.clientX / window.innerWidth
      targetMouse.y = 1 - e.clientY / window.innerHeight
    }

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      targetScroll = window.scrollY / (max || 1)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('scroll', onScroll, { passive: true })

    // Animation Loop
    const clock = new THREE.Clock()
    let frameId: number

    const animate = () => {
      frameId = requestAnimationFrame(animate)
      const elapsedTime = clock.getElapsedTime()
      
      material.uniforms.uTime.value = elapsedTime
      
      currentMouse.lerp(targetMouse, 0.04)
      material.uniforms.uMouse.value.copy(currentMouse)
      
      currentScroll += (targetScroll - currentScroll) * 0.05
      material.uniforms.uScroll.value = currentScroll

      renderer.render(scene, camera)
    }

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', onResize)
    animate()

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(frameId)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  )
}
