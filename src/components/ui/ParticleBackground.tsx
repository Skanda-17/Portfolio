'use client'

import { useEffect, useRef } from 'react'

/**
 * Lightweight animated particle field rendered on a <canvas>.
 * Draws floating nodes connected by lines near the cursor — a classic
 * "neural network" motif that stays performant and respects reduced motion.
 */
export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const setSize = () => {
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    setSize()

    // Scale particle count to viewport for performance on small screens.
    const count = Math.min(70, Math.floor((width * height) / 18000))
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.6 + 0.6,
    }))

    const colors = ['#3b82f6', '#06b6d4', '#8b5cf6']
    let raf = 0

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = colors[i % colors.length]
        ctx.globalAlpha = 0.6
        ctx.fill()

        // Connect nearby particles with faint lines.
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dist = Math.hypot(p.x - q.x, p.y - q.y)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = '#38bdf8'
            ctx.globalAlpha = (1 - dist / 120) * 0.18
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }

    if (prefersReduced) {
      draw() // single static frame
    } else {
      raf = requestAnimationFrame(draw)
    }

    const handleResize = () => setSize()
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  )
}
