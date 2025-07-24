"use client"

import { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    UnicornStudio: {
      init: (config: {
        canvas: HTMLCanvasElement;
        src: string;
        scale: number;
        dpi: number;
        fps: number;
        disableMobile: boolean;
        autoplay: boolean;
        loop: boolean;
        onLoad?: () => void;
        onError?: (error: unknown) => void;
      }) => void;
    };
  }
}

export default function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  console.log('BackgroundAnimation component rendering...')

  useEffect(() => {
    console.log('BackgroundAnimation useEffect - loading script...')
    const script = document.createElement('script')
    script.src = '/unicornStudio.umd.js'
    script.async = true
    script.onload = () => {
      console.log('UnicornStudio script loaded successfully')
      setIsLoaded(true)
    }
    script.onerror = () => {
      console.error('Failed to load UnicornStudio script')
    }
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  useEffect(() => {
    console.log('BackgroundAnimation second useEffect - isLoaded:', isLoaded, 'canvasRef.current:', !!canvasRef.current, 'window.UnicornStudio:', !!window.UnicornStudio)
    if (isLoaded && canvasRef.current && window.UnicornStudio) {
      console.log('Initializing UnicornStudio animation...')
      try {
        window.UnicornStudio.init({
          canvas: canvasRef.current,
          src: '/birds-of-paradise-animation.json',
          scale: 1,
          dpi: 1,
          fps: 60,
          disableMobile: false,
          autoplay: true,
          loop: true,
          onLoad: () => {
            console.log('Birds of Paradise animation loaded successfully')
          },
          onError: (error: unknown) => {
            console.error('Animation loading error:', error)
          }
        })
      } catch (error) {
        console.error('Failed to initialize animation:', error)
      }
    }
  }, [isLoaded])

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
      <canvas
        ref={canvasRef}
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
