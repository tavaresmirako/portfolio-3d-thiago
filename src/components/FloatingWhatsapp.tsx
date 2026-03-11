import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../utils/content'

export function FloatingWhatsapp() {
  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-20 right-4 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/50 bg-gradient-to-br from-emerald-500/80 via-emerald-500/70 to-cyan-500/70 text-white opacity-80 shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-1 hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 sm:bottom-24 sm:right-6"
      aria-label="Abrir conversa no WhatsApp com Thiago Tavares"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 180, damping: 16 }}
    >
      <motion.span
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut' }}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15"
      >
        <MessageCircle size={20} aria-hidden />
      </motion.span>
    </motion.a>
  )
}
