"use client"

import { useEffect, useRef, useState, useCallback } from 'react'

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

interface AnimationState {
  isScriptLoaded: boolean;
  isAnimationLoaded: boolean;
  hasError: boolean;
  errorMessage?: string;
}

export default function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [animationState, setAnimationState] = useState<AnimationState>({
    isScriptLoaded: false,
    isAnimationLoaded: false,
    hasError: false
  })

  const handleScriptLoad = useCallback(() => {
    console.log('UnicornStudio script loaded successfully')
    setAnimationState(prev => ({ ...prev, isScriptLoaded: true }))
  }, [])

  const handleScriptError = useCallback(() => {
    console.error('Failed to load UnicornStudio script')
    setAnimationState(prev => ({ 
      ...prev, 
      hasError: true, 
      errorMessage: 'Failed to load UnicornStudio script' 
    }))
  }, [])

  const handleAnimationLoad = useCallback(() => {
    console.log('Birds of Paradise Remix animation loaded successfully')
    setAnimationState(prev => ({ ...prev, isAnimationLoaded: true }))
  }, [])

  const handleAnimationError = useCallback((error: unknown) => {
    console.error('Animation loading error:', error)
    setAnimationState(prev => ({ 
      ...prev, 
      hasError: true, 
      errorMessage: `Animation error: ${error}` 
    }))
  }, [])

  useEffect(() => {
    console.log('BackgroundAnimation: Loading UnicornStudio script...')
    const script = document.createElement('script')
    script.src = '/unicornStudio.umd.js'
    script.async = true
    script.onload = handleScriptLoad
    script.onerror = handleScriptError
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [handleScriptLoad, handleScriptError])

  useEffect(() => {
    if (animationState.isScriptLoaded && canvasRef.current && window.UnicornStudio && !animationState.hasError) {
      console.log('BackgroundAnimation: Initializing Birds of Paradise Remix animation...')
      try {
        window.UnicornStudio.init({
          canvas: canvasRef.current,
          src: '/birds-of-paradise-animation.json',
          scale: 1,
          dpi: Math.min(window.devicePixelRatio || 1, 2),
          fps: 30,
          disableMobile: false,
          autoplay: true,
          loop: true,
          onLoad: handleAnimationLoad,
          onError: handleAnimationError
        })
      } catch (error) {
        console.error('Failed to initialize Birds of Paradise Remix animation:', error)
        setAnimationState(prev => ({ 
          ...prev, 
          hasError: true, 
          errorMessage: `Initialization error: ${error}` 
        }))
      }
    }
  }, [animationState.isScriptLoaded, animationState.hasError, handleAnimationLoad, handleAnimationError])

  if (animationState.hasError) {
    console.warn('BackgroundAnimation: Rendering fallback due to error:', animationState.errorMessage)
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
