import type { ReactNode } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

type SectionHeaderProps = {
  eyebrow: string
  title: string
  description?: ReactNode
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeIn('up', 0.04)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.25 }}
      className={clsx('max-w-3xl text-pretty', className)}
    >
      <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-[clamp(2rem,4vw,2.6rem)] font-semibold text-white">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-slate-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  )
}
