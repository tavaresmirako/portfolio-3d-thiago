import type { MouseEvent } from 'react'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import type { LucideIcon } from 'lucide-react'
import { FolderKanban, GraduationCap, Home, Layers3, Mail, User } from 'lucide-react'
import { navItems } from '../utils/content'

const SCROLL_RATIO_VISIBLE = 0.55

const navIconMap: Record<string, LucideIcon> = {
  hero: Home,
  about: User,
  projects: FolderKanban,
  stacks: Layers3,
  certificates: GraduationCap,
  contact: Mail
}

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState(navItems[0]?.id ?? 'hero')

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const headerHeight = document.getElementById('site-header')?.offsetHeight ?? 0
    const sectionElements = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section))

    if (!sectionElements.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= SCROLL_RATIO_VISIBLE) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: [0.35, SCROLL_RATIO_VISIBLE, 0.85],
        rootMargin: `-${headerHeight + 8}px 0px -55% 0px`
      }
    )

    sectionElements.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const handleNavigate =
    (id: string) => (event?: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      event?.preventDefault()

      if (typeof window === 'undefined') {
        return
      }

      const target = document.getElementById(id)
      if (!target) return

      setActiveSection(id)

      const headerHeight = document.getElementById('site-header')?.offsetHeight ?? 0
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 12

      window.scrollTo({
        top: Math.max(top, 0),
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      })
    }

  return (
    <>
      <header
        id="site-header"
        className="fixed inset-x-0 top-0 z-50 border-b border-amber-900/10"
        style={{
          backgroundColor: '#f0ece4',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeBlend in='SourceGraphic' mode='multiply'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23paper)' opacity='0.18'/%3E%3C/svg%3E"), linear-gradient(135deg, #f5f0e8 0%, #ece7dd 40%, #e6e0d6 100%)`,
          boxShadow: '0 2px 0 rgba(255,255,255,0.8) inset, 0 4px 20px rgba(0,0,0,0.15)',
        }}
      >
        <div className="mx-auto hidden w-full max-w-6xl items-center justify-between px-6 py-3 md:flex lg:px-10">
          <button
            type="button"
            onClick={handleNavigate('hero')}
            className="cursor-pointer text-sm font-semibold uppercase tracking-[0.32em] text-gray-800 transition-colors hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Thiago Tavares
          </button>

          <nav
            aria-label="Navegação principal desktop"
            className="flex items-center gap-2"
          >
            {navItems.map((item) => {
              const isActive = item.id === activeSection
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={handleNavigate(item.id)}
                  className={clsx(
                    'group relative inline-flex cursor-pointer items-center rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] transition-all duration-200 transform',
                    isActive
                      ? 'bg-amber-900/20 text-gray-900 shadow-md shadow-black/20 ring-1 ring-amber-900/20 scale-105'
                      : 'text-gray-700 hover:text-black hover:bg-black/5'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="relative whitespace-nowrap">{item.label}</span>
                </button>
              )
            })}
          </nav>
        </div>

        <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-5 py-3 md:hidden">
          <button
            type="button"
            onClick={handleNavigate('hero')}
            className="cursor-pointer text-sm font-semibold uppercase tracking-[0.38em] text-gray-800 transition-colors hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label="Voltar para o início"
          >
            Thiago Tavares
          </button>
        </div>
      </header>

      <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
        <nav
          aria-label="Navegação principal mobile"
          className="flex w-full items-center justify-between gap-1 border-t border-amber-900/10 px-3 py-2"
          style={{
            backgroundColor: '#f0ece4',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeBlend in='SourceGraphic' mode='multiply'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23paper)' opacity='0.18'/%3E%3C/svg%3E"), linear-gradient(135deg, #f5f0e8 0%, #ece7dd 40%, #e6e0d6 100%)`,
            paddingBottom: 'calc(env(safe-area-inset-bottom) + 0.5rem)',
          }}
        >
          {navItems.map((item) => {
            const isActive = item.id === activeSection
            const Icon = navIconMap[item.id] ?? Home

            return (
              <button
                key={item.id}
                type="button"
                onClick={handleNavigate(item.id)}
                className={clsx(
                  'group relative flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-gray-700 transition-all duration-200 transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
                  isActive ? 'bg-amber-900/20 text-gray-900 shadow-md shadow-black/20 scale-105' : 'hover:text-black'
                )}
                aria-label={item.label}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon
                  aria-hidden
                  className={clsx('h-5 w-5 transition-colors', isActive ? 'text-gray-900' : 'text-gray-600')}
                />
                <span className="sr-only">{item.label}</span>
                <span
                  className={clsx(
                    'pointer-events-none absolute inset-x-6 -top-3 h-1 rounded-full bg-primary/70 opacity-0 transition-opacity duration-200',
                    isActive && 'opacity-100'
                  )}
                />
                <span
                  className="pointer-events-none absolute -top-10 rounded-full border border-white/10 bg-slate-900/95 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-white opacity-0 shadow-lg shadow-black/40 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
                  role="presentation"
                >
                  {item.label}
                </span>
              </button>
            )
          })}
        </nav>
      </div>
    </>
  )
}
