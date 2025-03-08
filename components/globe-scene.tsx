"use client"

import { useRef, useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import * as THREE from "three"
import { Suspense } from "react"

// Main globe component that includes both the Earth and points
function GlobeContent() {
  const globeGroupRef = useRef(null)
  const [texture, setTexture] = useState(null)
  
  useEffect(() => {
    // Load the Earth texture from your public folder
    const loader = new THREE.TextureLoader()
    
    // Load texture from your public folder
    loader.load(
      '/assets/textures/earth.jpg',
      (loadedTexture) => {
        setTexture(loadedTexture)
      },
      undefined,
      (error) => {
        console.error('Error loading texture:', error)
      }
    )
  }, [])
  
  // Animation logic - rotate the entire group together
  useFrame(() => {
    if (globeGroupRef.current) {
      globeGroupRef.current.rotation.y += 0.001
    }
  })
  
  if (!texture) {
    return null // Wait until texture is loaded
  }
  
  // Convert lat/long to 3D coordinates on the globe surface
  const latLongToVector3 = (lat, long, radius) => {
    const phi = (90 - lat) * (Math.PI / 180)
    const theta = (long + 180) * (Math.PI / 180)
    
    const x = -(radius * Math.sin(phi) * Math.cos(theta))
    const z = radius * Math.sin(phi) * Math.sin(theta)
    const y = radius * Math.cos(phi)
    
    return new THREE.Vector3(x, y, z)
  }
  
  // Define some education hubs
  const locations = [
    { name: "USA", lat: 37.0902, long: -95.7129 },
    { name: "UK", lat: 55.3781, long: -3.4360 },
    { name: "Australia", lat: -25.2744, long: 133.7751 },
    { name: "Canada", lat: 56.1304, long: -106.3468 },
    { name: "Germany", lat: 51.1657, long: 10.4515 },
    { name: "Japan", lat: 36.2048, long: 138.2529 },
    { name: "India", lat: 20.5937, long: 78.9629 }
  ]
  
  return (
    <>
      {/* Put all globe objects in one group so they rotate together */}
      <group ref={globeGroupRef}>
        {/* Earth sphere with the custom texture */}
        <mesh>
          <sphereGeometry args={[2, 64, 64]} />
          <meshStandardMaterial
            map={texture}
            metalness={0.1}
            roughness={0.8}
          />
        </mesh>
        
        {/* Points of interest - now part of the same group as the Earth */}
        {locations.map((location, index) => {
          const position = latLongToVector3(location.lat, location.long, 2.02)
          
          return (
            <mesh key={index} position={position}>
              <sphereGeometry args={[0.05, 16, 16]} />
              <meshBasicMaterial color="#ff4757" />
            </mesh>
          )
        })}
      </group>
      
      {/* Outer glow - not affected by rotation */}
      <mesh>
        <sphereGeometry args={[2.15, 32, 32]} />
        <meshBasicMaterial 
          color="#8a5cf6" 
          opacity={0.1} 
          transparent 
          side={THREE.BackSide} 
        />
      </mesh>
    </>
  )
}

export default function GlobeScene() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 45,
        }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <Suspense fallback={null}>
          <GlobeContent />
        </Suspense>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          rotateSpeed={0.3} 
          autoRotate 
          autoRotateSpeed={0.3} 
        />
      </Canvas>
    </div>
  )
}