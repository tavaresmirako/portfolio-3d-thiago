import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const width = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.6
  })

  return (
    <motion.div
      style={{ scaleX: width }}
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-gradient-to-r from-primary via-sky-400 to-accent"
    />
  )
}
