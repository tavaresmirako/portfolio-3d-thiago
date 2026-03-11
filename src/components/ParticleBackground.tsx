import { useRef, useMemo, useCallback } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

// ── Simplex-like Perlin Noise (no dependencies) ─────────────────────────────
function fade(t: number) { return t * t * t * (t * (t * 6 - 15) + 10) }
function lerp(a: number, b: number, t: number) { return a + t * (b - a) }
function grad(hash: number, x: number, y: number, z: number) {
  const h = hash & 15
  const u = h < 8 ? x : y
  const v = h < 4 ? y : h === 12 || h === 14 ? x : z
  return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v)
}
const P = new Uint8Array(512)
const BASE = new Uint8Array(256).map((_, i) => i)
for (let i = 255; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [BASE[i], BASE[j]] = [BASE[j], BASE[i]]
}
for (let i = 0; i < 512; i++) P[i] = BASE[i & 255]

function perlin(x: number, y: number, z: number) {
  const X = Math.floor(x) & 255, Y = Math.floor(y) & 255, Z = Math.floor(z) & 255
  x -= Math.floor(x); y -= Math.floor(y); z -= Math.floor(z)
  const u = fade(x), v = fade(y), w = fade(z)
  const A = P[X] + Y, AA = P[A] + Z, AB = P[A + 1] + Z
  const B = P[X + 1] + Y, BA = P[B] + Z, BB = P[B + 1] + Z
  return lerp(
    lerp(lerp(grad(P[AA], x, y, z), grad(P[BA], x - 1, y, z), u),
         lerp(grad(P[AB], x, y - 1, z), grad(P[BB], x - 1, y - 1, z), u), v),
    lerp(lerp(grad(P[AA + 1], x, y, z - 1), grad(P[BA + 1], x - 1, y, z - 1), u),
         lerp(grad(P[AB + 1], x, y - 1, z - 1), grad(P[BB + 1], x - 1, y - 1, z - 1), u), v),
    w
  )
}
// ────────────────────────────────────────────────────────────────────────────

const PARTICLE_COUNT = 5000

function Particles() {
  const meshRef = useRef<THREE.Points>(null!)
  const mouse = useRef(new THREE.Vector2(0, 0))
  const { size } = useThree()
  const timeRef = useRef(0)

  // ── Generate particle seed data ──────────────────────────────────────────
  const { positions, basePositions, seeds } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const basePositions = new Float32Array(PARTICLE_COUNT * 3)
    const seeds = new Float32Array(PARTICLE_COUNT * 3)

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      const x = (Math.random() - 0.5) * 30
      const y = (Math.random() - 0.5) * 20
      const z = (Math.random() - 0.5) * 20
      basePositions[i3] = positions[i3] = x
      basePositions[i3 + 1] = positions[i3 + 1] = y
      basePositions[i3 + 2] = positions[i3 + 2] = z
      seeds[i3] = Math.random() * 100
      seeds[i3 + 1] = Math.random() * 100
      seeds[i3 + 2] = Math.random() * 100
    }
    return { positions, basePositions, seeds }
  }, [])

  // ── Variable sizes for depth-of-field bokeh feel ─────────────────────────
  const sizes = useMemo(() => {
    const s = new Float32Array(PARTICLE_COUNT)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      s[i] = Math.random() < 0.05
        ? Math.random() * 8 + 4   // bright bokeh particles
        : Math.random() * 2 + 0.5  // fine dust
    }
    return s
  }, [])

  // ── Shader material for pearlescent / glow look ──────────────────────────
  const material = useMemo(() => new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 } },
    vertexShader: `
      attribute float aSize;
      varying float vSize;
      void main() {
        vSize = aSize;
        vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aSize * (300.0 / -mvPos.z);
        gl_Position = projectionMatrix * mvPos;
      }
    `,
    fragmentShader: `
      varying float vSize;
      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;
        float strength = 1.0 - (dist * 2.0);
        strength = pow(strength, 1.8);
        // Pearl: slightly warm white center → cool blue-white edge
        vec3 center = vec3(1.0, 0.97, 0.94);
        vec3 edge   = vec3(0.72, 0.85, 1.0);
        vec3 color  = mix(edge, center, strength);
        float alpha = strength * mix(0.5, 1.0, smoothstep(0.0, 5.0, vSize));
        gl_FragColor = vec4(color, alpha);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  }), [])

  // ── Mouse tracking ────────────────────────────────────────────────────────
  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouse.current.set(
      (e.clientX / size.width  - 0.5) * 2,
      -(e.clientY / size.height - 0.5) * 2
    )
  }, [size])

  // Set up mouse listener once
  useMemo(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  // ── Animation loop ────────────────────────────────────────────────────────
  useFrame((_, delta) => {
    if (!meshRef.current) return
    timeRef.current += delta * 0.15

    const geo = meshRef.current.geometry
    const pos = geo.attributes.position.array as Float32Array
    const t = timeRef.current
    const mx = mouse.current.x
    const my = mouse.current.y

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      const bx = basePositions[i3]
      const by = basePositions[i3 + 1]
      const bz = basePositions[i3 + 2]

      // Perlin noise offset per axis
      const nx = perlin(seeds[i3]     + t, seeds[i3 + 1], seeds[i3 + 2]) * 1.5
      const ny = perlin(seeds[i3 + 1] + t, seeds[i3 + 2], seeds[i3])     * 1.5
      const nz = perlin(seeds[i3 + 2] + t, seeds[i3],     seeds[i3 + 1]) * 0.8

      // Mouse repulsion – map mouse to world space
      const wx = mx * 14
      const wy = my * 8
      const dx = bx + nx - wx
      const dy = by + ny - wy
      const dist2 = dx * dx + dy * dy
      const repulse = Math.max(0, 1 - dist2 / 36) * 2.5

      pos[i3]     = bx + nx - dx * repulse * 0.12
      pos[i3 + 1] = by + ny - dy * repulse * 0.12
      pos[i3 + 2] = bz + nz
    }

    geo.attributes.position.needsUpdate = true
    material.uniforms.uTime.value = t
  })

  // Build geometry
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('aSize',    new THREE.BufferAttribute(sizes, 1))
    return geo
  }, [positions, sizes])

  return <points ref={meshRef} geometry={geometry} material={material} />
}

export function ParticleBackground() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ antialias: false, alpha: true }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
      >
        <Particles />
      </Canvas>
    </div>
  )
}
