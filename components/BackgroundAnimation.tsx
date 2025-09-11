/* eslint-disable react/jsx-no-useless-fragment */
"use client"

import dynamic from "next/dynamic"
// Dynamically import Unicorn Studio component with SSR disabled
const UnicornScene = dynamic(
  () => import("unicornstudio-react/next"),
  { ssr: false }
)
import { useEffect, useState } from "react"

export default function BackgroundAnimation() {
  const [key, setKey] = useState(0)

  // Force component remount to ensure latest animation loads
  useEffect(() => {
    setKey(Date.now())
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ 
          zIndex: 1 
        }}
      >
        <UnicornScene
          key={key}
          projectId="JVofcmqXDssnf1aIHxr6"
          width="100%"
          height="100%"
          className="w-full h-full"
          scale={1}
          dpi={1.5}
          fps={60}
          lazyLoad={false}
          production={true}
          placeholder={
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30" />
          }
          showPlaceholderWhileLoading={true}
          showPlaceholderOnError={true}
          onLoad={() => {
            console.log('New Unicorn Studio animation loaded successfully - Project: JVofcmqXDssnf1aIHxr6')
          }}
          onError={(error) => {
            console.error('Animation loading error:', error)
          }}
        />
      </div>
    </div>
  )
}
