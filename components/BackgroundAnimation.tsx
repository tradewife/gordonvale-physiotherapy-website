"use client"

import dynamic from "next/dynamic"
import { useState } from "react"

// Dynamically import Unicorn Studio component with SSR disabled
const UnicornScene = dynamic(() => import("unicornstudio-react/next"), {
  ssr: false,
})

export default function BackgroundAnimation() {
  const [loaded, setLoaded] = useState(false)

  const markReady = () => {
    setLoaded(true)
    if (typeof document !== "undefined") {
      document.documentElement.dataset.bgReady = "true"
      document.documentElement.classList.add("bg-ready")
    }
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("background-ready"))
    }
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-y-0 left-[-30vw] w-[160vw]"
        style={{ transform: "translateX(-28vw)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30" />
        <UnicornScene
          projectId="BXRH1Z7z3I3tf6zgAIn0"
          width="160vw"
          height="100vh"
          className={`w-[160vw] h-screen transition-opacity duration-1000 ease-in-out ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
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
          onLoad={() => requestAnimationFrame(() => markReady())}
          onError={(error) => {
            console.error("Animation loading error:", error)
          }}
        />
      </div>
    </div>
  )
}
