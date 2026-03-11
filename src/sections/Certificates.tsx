import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, X } from 'lucide-react'
import { certificates } from '../utils/content'
import type { Certificate } from '../types/content'
import { fadeIn, staggerContainer } from '../utils/motion'

export function Certificates() {
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null)

  useEffect(() => {
    if (!activeCertificate) {
      document.body.style.removeProperty('overflow')
      return
    }

    document.body.style.setProperty('overflow', 'hidden')

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveCertificate(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.removeProperty('overflow')
    }
  }, [activeCertificate])

  return (
    <section
      id="certificates"
      className="relative scroll-mt-24 overflow-hidden px-6 py-20 sm:scroll-mt-32 sm:px-8 sm:py-24 lg:scroll-mt-36 lg:px-16"
    >
      <div className="absolute inset-0 -z-10 bg-noise-texture opacity-35" aria-hidden />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12" data-no-card>
        <motion.div
          variants={staggerContainer()}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto flex w-full max-w-4xl flex-col gap-6"
        >
          <motion.div variants={fadeIn("up", 0.05)} className="w-fit">
            <div className="project-card px-6 py-3">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-900">
                certificados
              </span>
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn("up", 0.1)}>
            <div className="project-card px-8 py-8 sm:px-10 sm:py-10">
              <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl text-pretty">
                Resultados reconhecidos em formação contínua
              </h2>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("up", 0.15)}>
            <div className="project-card px-8 py-6 sm:px-10 sm:py-8">
              <p className="text-base font-bold leading-relaxed text-gray-800 sm:text-lg text-pretty">
                Selecionei cursos e imersões que reforçam meu domínio da stack moderna e o foco em UX, automação e performance.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1, 0.05)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          {certificates.map((certificate, index) => (
            <motion.article
              key={certificate.title}
              variants={fadeIn('up', index * 0.05, 0.25)}
              className="shine-border group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-lg shadow-black/30 transition-transform duration-200 hover:-translate-y-1"
            >
              <button
                type="button"
                onClick={() => setActiveCertificate(certificate)}
                className="relative aspect-video overflow-hidden bg-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-label={`Ampliar certificado ${certificate.title}`}
              >
                <img
                  src={certificate.imageUrl}
                  alt={certificate.title}
                  className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                  loading="lazy"
                />
              </button>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{certificate.issuer}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{certificate.title}</h3>
                </div>
                <div className="mt-auto">
                  <a
                    href={certificate.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-slate-100 transition-colors hover:border-primary/60 hover:bg-primary/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    Ver certificado
                    <ExternalLink size={16} aria-hidden />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeCertificate ? (
          <motion.div
            key="certificate-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 px-4 backdrop-blur-md"
            onClick={() => setActiveCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="shine-border relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950"
              role="dialog"
              aria-modal="true"
              aria-label={`Certificado ${activeCertificate.title}`}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-slate-200 transition-colors hover:border-primary/60 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                onClick={() => setActiveCertificate(null)}
                aria-label="Fechar visualização do certificado"
              >
                <X size={18} aria-hidden />
              </button>
              <img
                src={activeCertificate.imageUrl}
                alt={activeCertificate.title}
                className="h-full w-full max-h-[80vh] object-contain bg-slate-950"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}
