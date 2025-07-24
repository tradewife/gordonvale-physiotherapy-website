"use client"

import { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    UnicornStudio: {
      init: () => Promise<any>;
      destroy: () => void;
    };
  }
}

export default function BackgroundAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js'
    script.async = true
    
    script.onload = () => {
      console.log('UnicornStudio CDN script loaded successfully')
      setIsLoaded(true)
    }
    
    script.onerror = () => {
      console.error('Failed to load UnicornStudio CDN script')
      setHasError(true)
    }
    
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
      if (window.UnicornStudio) {
        window.UnicornStudio.destroy()
      }
    }
  }, [])

  useEffect(() => {
    if (isLoaded && window.UnicornStudio && containerRef.current) {
      console.log('Initializing Birds of Paradise Remix animation with official embedding...')
      
      window.UnicornStudio.init()
        .then((scenes) => {
          console.log('Birds of Paradise Remix animation loaded successfully:', scenes)
        })
        .catch((error) => {
          console.error('Animation loading error:', error)
          setHasError(true)
        })
    }
  }, [isLoaded])

  if (hasError) {
    console.warn('BackgroundAnimation: Rendering fallback due to error')
    return (
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30" />
        <div 
          className="absolute inset-0 bg-white/80"
          style={{ zIndex: 2 }}
        />
      </div>
    )
  }

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
      <div
        ref={containerRef}
        data-us-project="JVofcmqXDssnf1aIHxr6"
        className="w-full h-full"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          opacity: 0.3
        }}
      />
      <div 
        className="absolute inset-0 bg-white/80"
        style={{ zIndex: 2 }}
      />
    </div>
  )
}
