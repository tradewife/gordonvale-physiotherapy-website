"use client"

import UnicornScene from "unicornstudio-react/next"

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ 
          opacity: 0.3,
          zIndex: 1 
        }}
      >
        <UnicornScene
          projectId="JVofcmqXDssnf1aIHxr6"
          width="100%"
          height="100%"
          className="w-full h-full"
          scale={1}
          dpi={1.5}
          fps={60}
          lazyLoad={true}
          production={true}
          placeholder={
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30" />
          }
          showPlaceholderWhileLoading={true}
          showPlaceholderOnError={true}
          onLoad={() => {
            console.log('Birds of Paradise Remix animation loaded successfully')
          }}
          onError={(error) => {
            console.error('Animation loading error:', error)
          }}
        />
      </div>
      <div 
        className="absolute inset-0 bg-white/80"
        style={{ zIndex: 2 }}
      />
    </div>
  )
}
