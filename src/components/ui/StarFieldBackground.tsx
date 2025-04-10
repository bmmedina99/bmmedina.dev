import { STARTS_COUNT } from '@/constants'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { TextureLoader } from 'three'
import type { Points } from 'three/src/objects/Points.js'

function StarField() {
  const starsRef = useRef<Points>(null)
  const starsTexture = useLoader(TextureLoader, '/images/star.png')

  const [startsCount, setStartsCount] = useState(STARTS_COUNT)

  useEffect(() => {
    if (window.innerWidth < 768) setStartsCount(STARTS_COUNT / 2)
  }, [])

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
    const positions = starsRef.current.geometry.attributes.position
      .array as Float32Array

    for (let i = 0; i < startsCount; i++) {
      const i3 = i * 3
      positions[i3 + 2] += 0.05

      if (positions[i3 + 2] > 50) positions[i3 + 2] = -50
    }
    starsRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach='attributes-position'
          count={starsPositions.length / 3}
          args={[starsPositions, 3, true]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.5}
        map={starsTexture}
        transparent
        depthWrite={false}
      />
    </points>
  )
}

function StarFieldBackground() {
  return (
    <div className='w-full h-auto fixed inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarField />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default StarFieldBackground
