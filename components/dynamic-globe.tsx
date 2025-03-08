"use client"

import dynamic from 'next/dynamic'
import React from 'react'

// Create loading component
const LoadingFallback = () => (
  <div style={{
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    color: '#fff'
  }}>
    Loading 3D Globe...
  </div>
)

// Use dynamic import with explicit noSSR option
const DynamicGlobeWithNoSSR = dynamic(
  () => import('./globe-scene'),
  { 
    ssr: false,
    loading: LoadingFallback
  }
)

// Wrap in a div with defined dimensions
export default function DynamicGlobe() {
  return (
    <div style={{ width: '100%', height: '500px', position: 'relative' }}>
      <DynamicGlobeWithNoSSR />
    </div>
  )
}