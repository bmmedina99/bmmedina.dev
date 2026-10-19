import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { AdditiveBlending, TextureLoader } from 'three'
import type { Points } from 'three/src/objects/Points.js'
import { STARTS_COUNT } from '@/lib/constants'

const CAMERA = { position: [0, 0, 1] as [number, number, number], fov: 75 }
const PERFORMANCE = { min: 0.5 }
const GL = {
  antialias: false,
  powerPreference: 'high-performance' as const,
}

function StarField({ onReady }: { onReady: (ready: boolean) => void }) {
  const starsRef = useRef<Points>(null)
  const starsTexture = useLoader(
    TextureLoader,
    'assets/images/background-star.webp',
  )

  useEffect(() => {
    onReady(true)
  }, [onReady])

  const [startsCount] = useState(() =>
    window.matchMedia('(max-width: 767px)').matches
      ? STARTS_COUNT / 2
      : STARTS_COUNT,
  )

  const starsPositions = useMemo(() => {
    const positions = new Float32Array(startsCount * 3)
    for (let i = 0; i < startsCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100
    }
    return positions
  }, [startsCount])

  useFrame(() => {
    if (!starsRef.current) return
    const position = starsRef.current.geometry.attributes.position
    if (!position) return

    for (let i = 2; i < starsPositions.length; i += 3) {
      starsPositions[i] += 0.05
      if (starsPositions[i] > 50) starsPositions[i] = -50
    }

    position.needsUpdate = true
  })

  return (
    <points
      ref={starsRef}
      frustumCulled={false}
    >
      <bufferGeometry>
        <bufferAttribute
          attach='attributes-position'
          count={starsPositions.length / 3}
          args={[starsPositions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.5}
        map={starsTexture}
        transparent
        depthWrite={false}
        blending={AdditiveBlending}
        vertexColors={false}
        fog={false}
        toneMapped={false}
      />
    </points>
  )
}

function StarFieldBackground() {
  const [isReady, setIsReady] = useState(false)

  return (
    <div
      className={`fixed inset-0 size-auto -z-10 pointer-events-none transition-opacity duration-1000 ease-out motion-reduce:transition-none ${isReady ? 'opacity-100' : 'opacity-0'}`}
    >
      <Canvas
        camera={CAMERA}
        performance={PERFORMANCE}
        gl={GL}
      >
        <Suspense fallback={null}>
          <StarField onReady={setIsReady} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default StarFieldBackground
