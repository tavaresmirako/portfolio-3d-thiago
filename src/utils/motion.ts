import type { Variants } from 'framer-motion'

type Direction = 'up' | 'down' | 'left' | 'right'

export const fadeIn = (direction: Direction = 'up', delay = 0, duration = 0.25): Variants => {
  const distance = 28

  const offsets: Record<Direction, { x?: number; y?: number }> = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: -distance },
    right: { x: distance }
  }

  const initialOffset = offsets[direction] ?? offsets.up
  const axis = initialOffset.x !== undefined ? 'x' : 'y'

  return {
    initial: {
      opacity: 0,
      ...initialOffset
    },
    animate: {
      opacity: 1,
      ...(axis === 'x' ? { x: 0 } : { y: 0 }),
      transition: {
        type: 'spring',
        stiffness: 110,
        damping: 22,
        delay,
        duration
      }
    }
  }
}

export const staggerContainer = (stagger = 0.08, delayChildren = 0.02): Variants => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren: stagger,
      delayChildren
    }
  }
})

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.92 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.28, ease: [0.4, 0, 0.2, 1] }
  }
}
