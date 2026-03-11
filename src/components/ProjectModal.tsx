import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  BadgeCheck,
  Code,
  Github,
  Globe,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import type { Project } from '../types/content'

export type ProjectModalProps = {
  project: Project
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const mediaGallery = useMemo(
    () => (project.gallery && project.gallery.length ? project.gallery : [project.imageUrl]),
    [project.gallery, project.imageUrl]
  )
  const [currentSlide, setCurrentSlide] = useState(0)
  const [zoomImageOpen, setZoomImageOpen] = useState(false)
  const badges = useMemo(
    () => Array.from(new Set([project.category, project.role, project.status].filter(Boolean))),
    [project.category, project.role, project.status]
  )

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [onClose])

  useEffect(() => {
    setCurrentSlide(0)
    setZoomImageOpen(false)
  }, [project.slug])

  useEffect(() => {
    document.body.style.overflow = zoomImageOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [zoomImageOpen])

  const goToSlide = (direction: 'prev' | 'next') => {
    setCurrentSlide((prev) => {
      if (direction === 'prev') {
        return prev === 0 ? mediaGallery.length - 1 : prev - 1
      }
      return prev === mediaGallery.length - 1 ? 0 : prev + 1
    })
  }

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const fallback = project.imageUrl
    if (event.currentTarget.src !== fallback) {
      event.currentTarget.onerror = null
      event.currentTarget.src = fallback
    }
  }

  const handleZoom = () => {
    setZoomImageOpen(true)
  }

  const renderBadgeRow = () =>
    badges.length ? (
      <div className="flex flex-wrap items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-slate-500 transition-colors dark:text-slate-400">
        {badges.map((badge) => (
          <span
            key={`${project.slug}-${badge}`}
            className="rounded-full border border-surface-light-muted/70 bg-white/70 px-3 py-1 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
          >
            {`[${badge}]`}
          </span>
        ))}
      </div>
    ) : null

  const renderGallery = () => (
    <div className="relative rounded-2xl border border-surface-light-muted/70 bg-white/40 p-3 shadow-xl transition dark:border-white/10 dark:bg-white/5">
      <div className="relative overflow-hidden rounded-xl">
        {mediaGallery[currentSlide].match(/\.(mp4|webm|mov)$/i) ? (
          <video
            src={mediaGallery[currentSlide]}
            className="aspect-video h-auto w-full max-h-[500px] rounded-xl object-cover"
            controls
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={mediaGallery[currentSlide]}
            alt={`Imagem ilustrativa do projeto ${project.title}`}
            className="aspect-video h-auto w-full max-h-[500px] rounded-xl object-cover"
            loading="lazy"
            onError={handleImageError}
          />
        )}
        <button
          type="button"
          onClick={handleZoom}
          className="absolute right-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/60 bg-slate-900/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white backdrop-blur transition hover:bg-white/80 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Ampliar imagem em tela cheia"
        >
          <Maximize2 size={14} />
          Zoom
        </button>
      </div>
      {mediaGallery.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => goToSlide('prev')}
            className="absolute left-6 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-slate-900/60 text-white backdrop-blur transition hover:bg-white/80 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => goToSlide('next')}
            className="absolute right-6 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-slate-900/60 text-white backdrop-blur transition hover:bg-white/80 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Próxima imagem"
          >
            <ChevronRight size={18} />
          </button>
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {mediaGallery.map((_, index) => (
              <button
                key={`${project.slug}-thumb-${index}`}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 w-2.5 rounded-full border border-white/70 transition ${
                  currentSlide === index ? 'bg-white' : 'bg-white/30'
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )

  const renderProjectLayout = () => (
    <div className="flex flex-col gap-8">
      {renderGallery()}
      <div className="mt-10 flex flex-col gap-8 pb-10">
        <div className="space-y-4">
          {renderBadgeRow()}
          <h2
            id={`project-${project.slug}-title`}
            className="font-display text-[clamp(2rem,3.6vw,2.8rem)] font-semibold leading-tight"
          >
            {project.title}
          </h2>
        </div>
        <hr className="my-6 border-white/10" />
        <section className="space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 transition-colors dark:text-slate-400">
            Sobre o projeto
          </h3>
          <p className="text-base leading-relaxed text-slate-600 transition-colors dark:text-slate-300">
            {project.description}
          </p>
        </section>
        {project.learned?.length ? (
          <>
            <hr className="my-6 border-white/10" />
            <section>
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 transition-colors dark:text-slate-400">
                Aprendizado aplicado
              </h3>
              <ul className="mt-4 grid gap-3">
                {project.learned.map((item) => (
                  <li
                    key={`${project.slug}-learned-${item}`}
                    className="flex items-start gap-3 rounded-2xl border border-surface-light-muted/70 bg-white/70 px-5 py-4 text-sm leading-snug text-slate-700 transition-colors dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                  >
                    <BadgeCheck size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </>
        ) : null}
        {project.desafios?.length ? (
          <>
            <hr className="my-6 border-white/10" />
            <section>
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 transition-colors dark:text-slate-400">
                Desafios técnicos
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {project.desafios.map((challenge) => (
                  <li
                    key={`${project.slug}-challenge-${challenge}`}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur"
                  >
                    {challenge}
                  </li>
                ))}
              </ul>
            </section>
          </>
        ) : null}
        {project.repoHighlights?.length ? (
          <>
            <hr className="my-6 border-white/10" />
            <section>
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 transition-colors dark:text-slate-400">
                Repositório em destaque
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {project.repoHighlights.map((item) => (
                  <span
                    key={`${project.slug}-repo-${item}`}
                    className="inline-flex items-center gap-2 rounded-full border border-surface-light-muted/70 bg-white/70 px-5 py-2 text-sm text-slate-700 transition-colors dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                  >
                    <Code size={16} />
                    {item}
                  </span>
                ))}
              </div>
            </section>
          </>
        ) : null}
        {project.nextSteps?.length ? (
          <>
            <hr className="my-6 border-white/10" />
            <section>
              <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 transition-colors dark:text-slate-400">
                Próximos passos
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
                {project.nextSteps.map((step) => (
                  <li key={`${project.slug}-next-${step}`}>{step}</li>
                ))}
              </ul>
            </section>
          </>
        ) : null}
        <hr className="my-6 border-white/10" />
        <section>
          <h3 className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 transition-colors dark:text-slate-400">
            Stack principal
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600 transition-colors dark:text-slate-200">
            {project.technologies.map((tech) => (
              <li
                key={`${project.slug}-${tech}`}
                className="rounded-full border border-surface-light-muted/70 bg-white/70 px-3 py-1 dark:border-white/10 dark:bg-white/5"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>
        <hr className="my-6 border-white/10" />
        <div className="flex flex-wrap items-center gap-3">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-gradient-to-r from-primary/30 to-accent/40 px-4 py-2 text-sm font-semibold text-surface-foreground transition-transform duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-glow-primary dark:text-white"
            >
              <Globe size={18} aria-hidden />
              Ver deploy
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full border border-surface-light-muted/70 bg-white/70 px-4 py-2 text-sm font-semibold italic text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              🔒 Sem deploy público no momento (API ou ambiente local)
            </span>
          )}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-surface-light-muted/70 bg-white/70 px-5 py-2 text-sm font-semibold text-slate-700 transition-transform duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            <Github size={18} aria-hidden />
            Ver código
          </a>
        </div>
      </div>
    </div>
  )

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 px-4 py-10 backdrop-blur"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`project-${project.slug}-title`}
      onMouseDown={handleBackdropClick}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-surface-light p-10 text-surface-light-foreground shadow-2xl transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100 sm:p-12"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-700 transition-colors duration-200 hover:bg-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:text-white"
          aria-label="Fechar detalhes do projeto"
        >
          <X size={18} />
        </button>
        <div className="max-h-[75vh] overflow-y-auto pr-1">{renderProjectLayout()}</div>
      </div>
      {zoomImageOpen && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 px-4 py-10 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Visualização ampliada do projeto ${project.title}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setZoomImageOpen(false)
            }
          }}
        >
          <button
            type="button"
            onClick={() => setZoomImageOpen(false)}
            className="absolute right-8 top-8 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Fechar imagem em tela cheia"
          >
            <X size={18} />
          </button>
          {mediaGallery[currentSlide].match(/\.(mp4|webm|mov)$/i) ? (
            <video
              src={mediaGallery[currentSlide]}
              className="max-h-[90vh] max-w-[90vw] rounded-3xl object-contain"
              controls
              autoPlay
              muted
              loop
              playsInline
              onClick={(event) => event.stopPropagation()}
            />
          ) : (
            <img
              src={mediaGallery[currentSlide]}
              alt={`Imagem ampliada do projeto ${project.title}`}
              className="max-h-[90vh] max-w-[90vw] rounded-3xl object-contain"
              loading="lazy"
              onClick={(event) => event.stopPropagation()}
              onError={handleImageError}
            />
          )}
        </div>
      )}
      <button type="button" className="sr-only" onClick={onClose}>
        Fechar
      </button>
    </div>,
    document.body
  )
}
