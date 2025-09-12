"use client"

import dynamic from "next/dynamic"
import { useState } from "react"

// Dynamically import Unicorn Studio component with SSR disabled
const UnicornScene = dynamic(() => import("unicornstudio-react/next"), {
  ssr: false,
})

export default function BackgroundAnimation() {
  const [visible, setVisible] = useState(false)

  return (
    <div
      className={`fixed inset-0 pointer-events-none transition-opacity duration-1000 ease-in-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{ zIndex: 1 }}
    >
      <UnicornScene
        projectId="BXRH1Z7z3I3tf6zgAIn0"
        width="100vw"
        height="100vh"
        className="w-screen h-screen"
        scale={1}
        dpi={1.5}
        fps={60}
        lazyLoad={false}
        production
        placeholder={
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30" />
        }
        showPlaceholderWhileLoading
        showPlaceholderOnError
        onLoad={() => requestAnimationFrame(() => setVisible(true))}
        onError={(error) => {
          console.error("Animation loading error:", error)
        }}
      />
    </div>
  )
}
