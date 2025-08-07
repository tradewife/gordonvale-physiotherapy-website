import React from 'react'

interface GlassmorphismIconProps {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
  variant?: 'default' | 'iridescent'
}

export const GlassmorphismIcon: React.FC<GlassmorphismIconProps> = ({
  children,
  size = 'md',
  className = '',
  variant = 'default'
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12 p-2',
    md: 'w-20 h-20 sm:w-24 sm:h-24 p-4 sm:p-5',
    lg: 'w-24 h-24 sm:w-28 sm:h-28 p-5 sm:p-6'
  }

  const baseClasses = `
    ${sizeClasses[size]}
    rounded-full
    flex items-center justify-center
    transition-all duration-500
    relative
    overflow-hidden
    ${className}
  `

  if (variant === 'iridescent') {
    return (
      <div className={`${baseClasses} group-hover:scale-110 group-hover:-translate-y-3`} style={{
        filter: 'drop-shadow(0 12px 24px rgba(0, 0, 0, 0.2)) drop-shadow(0 6px 12px rgba(0, 0, 0, 0.15)) drop-shadow(0 25px 50px rgba(0, 0, 0, 0.1))'
      }}>
        {/* Enhanced outer glow/halo effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/30 via-pink-400/30 to-blue-400/30 blur-xl scale-125 opacity-60 group-hover:opacity-100 group-hover:scale-140 transition-all duration-500"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-300/25 via-orange-300/25 to-purple-300/25 blur-lg scale-115 opacity-40 group-hover:opacity-80 transition-all duration-500"></div>

        {/* Pulsing glow animation on hover */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-purple-300/20 to-blue-300/20 blur-2xl scale-150 opacity-0 group-hover:opacity-60 group-hover:animate-pulse transition-all duration-700"></div>

        {/* Donut/Ring structure - Thick outer ring band */}
        <div className="absolute inset-0 rounded-full" style={{
          background: `
            radial-gradient(circle at center,
              rgba(255, 255, 255, 0.1) 0%,
              rgba(255, 255, 255, 0.15) 25%,
              rgba(255, 255, 255, 0.4) 60%,
              rgba(255, 255, 255, 0.25) 75%,
              rgba(255, 255, 255, 0.35) 85%,
              rgba(255, 255, 255, 0.2) 95%,
              rgba(255, 255, 255, 0.1) 100%
            )
          `,
          backdropFilter: 'blur(25px) saturate(1.4)',
          boxShadow: `
            inset 0 3px 0 rgba(255, 255, 255, 0.7),
            inset 0 -3px 0 rgba(0, 0, 0, 0.2),
            inset 3px 0 0 rgba(255, 255, 255, 0.4),
            inset -3px 0 0 rgba(0, 0, 0, 0.15),
            0 0 0 3px rgba(255, 255, 255, 0.4),
            0 0 20px rgba(255, 255, 255, 0.3)
          `
        }}></div>

        {/* Iridescent ring layers - concentrated in outer band */}
        <div className="absolute inset-0 rounded-full" style={{
          background: `
            radial-gradient(circle at center,
              rgba(147, 51, 234, 0.1) 0%,
              rgba(147, 51, 234, 0.2) 30%,
              rgba(147, 51, 234, 0.4) 60%,
              rgba(236, 72, 153, 0.35) 75%,
              rgba(59, 130, 246, 0.4) 85%,
              rgba(59, 130, 246, 0.2) 100%
            )
          `,
          backdropFilter: 'blur(20px)'
        }}></div>

        <div className="absolute inset-0 rounded-full" style={{
          background: `
            radial-gradient(circle at center,
              rgba(34, 197, 94, 0.05) 0%,
              rgba(34, 197, 94, 0.15) 40%,
              rgba(251, 146, 60, 0.3) 65%,
              rgba(168, 85, 247, 0.25) 80%,
              rgba(168, 85, 247, 0.15) 100%
            )
          `
        }}></div>

        {/* Enhanced glossy ring surface with curved highlights */}
        <div className="absolute inset-0 rounded-full" style={{
          background: `
            radial-gradient(circle at 25% 25%,
              rgba(255, 255, 255, 0.2) 0%,
              rgba(255, 255, 255, 0.4) 30%,
              rgba(255, 255, 255, 0.7) 60%,
              rgba(255, 255, 255, 0.4) 75%,
              rgba(255, 255, 255, 0.2) 90%,
              transparent 100%
            )
          `,
          opacity: 0.9
        }}></div>

        {/* Multiple highlight bands for ring depth */}
        <div className="absolute inset-0 rounded-full" style={{
          background: `
            radial-gradient(circle at center,
              rgba(255, 255, 255, 0.3) 0%,
              rgba(255, 255, 255, 0.5) 20%,
              rgba(255, 255, 255, 0.7) 50%,
              rgba(255, 255, 255, 0.5) 70%,
              rgba(255, 255, 255, 0.3) 85%,
              rgba(255, 255, 255, 0.1) 100%
            )
          `,
          filter: 'blur(2px)',
          opacity: 0.6
        }}></div>

        {/* Premium ring border with enhanced glass edge */}
        <div className="absolute inset-0 rounded-full" style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.6))',
          mask: `
            radial-gradient(circle at center,
              transparent 34%,
              black 35%,
              black 36%,
              transparent 37%
            ),
            radial-gradient(circle at center,
              transparent 83%,
              black 84%,
              black 85%,
              transparent 86%
            )
          `,
          WebkitMask: `
            radial-gradient(circle at center,
              transparent 34%,
              black 35%,
              black 36%,
              transparent 37%
            ),
            radial-gradient(circle at center,
              transparent 83%,
              black 84%,
              black 85%,
              transparent 86%
            )
          `
        }}></div>

        {/* Enhanced 3D depth shadows for donut shape */}
        <div className="absolute inset-0 rounded-full shadow-2xl shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-500"></div>
        <div className="absolute inset-0 rounded-full shadow-xl shadow-black/15 group-hover:shadow-black/25 transition-all duration-500"></div>

        {/* Content centered in donut hole */}
        <div className="relative z-30 group-hover:scale-115 transition-transform duration-400">
          {children}
        </div>

        {/* Enhanced shine effects that wrap around the ring */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{
          background: `
            radial-gradient(circle at 25% 25%,
              transparent 35%,
              rgba(255, 255, 255, 0.5) 36%,
              rgba(255, 255, 255, 0.3) 50%,
              transparent 65%
            )
          `
        }}></div>

        {/* Breathing glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/25 via-pink-400/25 to-blue-400/25 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-lg scale-120 group-hover:animate-pulse"></div>
      </div>
    )
  }

  // Default variant (fallback)
  return (
    <div
      className={`
        ${baseClasses}
        bg-white/20
        backdrop-blur-xl
        border border-white/30
        shadow-lg
        group-hover:bg-white/30
        group-hover:border-white/40
        group-hover:shadow-xl
      `}
    >
      {children}
    </div>
  )
}
