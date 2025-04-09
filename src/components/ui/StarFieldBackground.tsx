import { STARTS_COUNT } from '@/constants'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Suspense, useMemo, useRef } from 'react'
import { AdditiveBlending, type Points, TextureLoader } from 'three'

function StarField() {
  const starsRef = useRef<Points>(null)
  const starsTexture = useLoader(TextureLoader, '/images/star.png')

  const starsPositions = useMemo(() => {
    const positions = new Float32Array(STARTS_COUNT * 3)
    for (let i = 0; i < STARTS_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100
    }
    return positions
  }, [])

  useFrame(() => {
    if (!starsRef.current) return
    const starsAtrributesPosition =
      starsRef.current.geometry.attributes.position

    for (let i = 0; i < STARTS_COUNT; i++) {
      const i3 = i * 3
      starsAtrributesPosition.array[i3 + 2] += 0.05
      if (starsAtrributesPosition.array[i3 + 2] > 50) {
        starsAtrributesPosition.array[i3 + 2] = -50
      }
    }
    starsAtrributesPosition.needsUpdate = true
  })

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach='attributes-position'
          count={starsPositions.length / 3}
          array={starsPositions}
          itemSize={3}
          args={[starsPositions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.5}
        map={starsTexture}
        transparent
        depthWrite={false}
        blending={AdditiveBlending}
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
