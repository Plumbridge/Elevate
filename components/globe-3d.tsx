"use client"

import { Suspense, useState, useEffect } from "react"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"

// Basic loading component
function LoadingGlobe() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-32 h-32 rounded-full bg-primary/20 animate-pulse" />
    </div>
  )
}

// Error boundary component
function ErrorBoundary({ children }: { children: React.ReactNode }) {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.error("Three.js Error:", error)
      setHasError(true)
    }

    window.addEventListener("error", handleError)
    return () => window.removeEventListener("error", handleError)
  }, [])

  if (hasError) {
    return <LoadingGlobe />
  }

  return children
}

// Dynamically import the Globe scene with NoSSR
const GlobeScene = dynamic(() => import("./globe-scene"), {
  ssr: false,
  loading: () => <LoadingGlobe />,
})

export default function Globe3D() {
  // Only render on client-side
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  if (!isMounted) {
    return <LoadingGlobe />
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0"
    >
      <ErrorBoundary>
        <Suspense fallback={<LoadingGlobe />}>
          <GlobeScene />
        </Suspense>
      </ErrorBoundary>
    </motion.div>
  )
}