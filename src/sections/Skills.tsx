import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { focusCurrent, focusExploration, skills, softSkillHighlights } from '../utils/content'
import { fadeIn, staggerContainer } from '../utils/motion'

const tabs = ['Frontend', 'Backend', 'Conceitos'] as const
type TabKey = (typeof tabs)[number]

export function Skills() {
  const [activeTab, setActiveTab] = useState<TabKey>('Frontend')

  const groupedTechnologies = useMemo(() => {
    return skills.reduce<Record<TabKey, { name: string; iconUrl?: string; iconSymbol?: string }[]>>(
      (acc, skill) => {
        const group: TabKey =
          skill.category === 'Frontend'
            ? 'Frontend'
            : skill.category === 'Backend'
              ? 'Backend'
              : 'Conceitos'

        acc[group] = acc[group] ?? []
        acc[group].push({ name: skill.name, iconUrl: skill.iconUrl, iconSymbol: skill.iconSymbol })
        return acc
      },
      {
        Frontend: [],
        Backend: [],
        Conceitos: []
      }
    )
  }, [])

  const technologies = groupedTechnologies[activeTab] ?? []

  return (
    <section
      id="stacks"
      className="relative scroll-mt-24 overflow-hidden px-6 py-20 sm:scroll-mt-32 sm:px-8 sm:py-24 lg:scroll-mt-36 lg:px-16"
    >
      <div className="absolute inset-0 -z-10 bg-noise-texture opacity-35" aria-hidden />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12" data-no-card>
        <motion.div
          variants={staggerContainer()}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto flex w-full max-w-4xl flex-col gap-6 text-left md:mx-0 md:max-w-none"
        >
          <motion.div variants={fadeIn("up", 0.05)} className="w-fit">
            <div className="project-card px-6 py-3">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-900">
                stacks principais
              </span>
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn("up", 0.1)}>
            <div className="project-card px-8 py-8 sm:px-10 sm:py-10">
              <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl text-pretty">
                Stacks principais que uso no dia a dia
              </h2>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("up", 0.15)}>
            <div className="project-card px-8 py-6 sm:px-10 sm:py-8">
              <p className="text-base font-bold leading-relaxed text-gray-800 sm:text-lg text-pretty">
                Organizei a stack em frentes para facilitar a leitura: selecione uma categoria e veja rapidamente onde concentro experiência e estudos.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-12 gap-y-12 gap-x-8">
          <motion.div
            variants={fadeIn('up', 0.05, 0.25)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="col-span-12 flex justify-center md:block"
          >
            <div className="shine-border w-full max-w-xl rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl shadow-black/30 sm:p-8 md:max-w-none">
              <div className="flex flex-wrap gap-3">
                {tabs.map((tab) => {
                  const isActive = tab === activeTab
                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={clsx(
                        'cursor-pointer rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.32em] transition-all duration-200',
                        isActive
                          ? 'bg-slate-800 text-white shadow-md shadow-black/20 ring-1 ring-white/10'
                          : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                      )}
                    >
                      {tab}
                    </button>
                  )
                })}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {technologies.map((tech) => {
                  const hasImage = Boolean(tech.iconUrl)
                  return (
                    <div
                      key={`${activeTab}-${tech.name}`}
                      className="flex items-center gap-3 rounded-2xl border border-white/5 bg-slate-950/70 p-4 transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-lg font-semibold text-white">
                        {hasImage ? (
                          <img
                            src={tech.iconUrl}
                            alt={tech.name}
                            className="h-7 w-7 object-contain"
                            loading="lazy"
                          />
                        ) : (
                          tech.iconSymbol ?? tech.name.charAt(0)
                        )}
                      </span>
                      <span className="text-base font-medium text-slate-200">{tech.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.08, 0.25)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="col-span-12 flex justify-center md:block"
          >
            <div className="w-full max-w-xl flex flex-col gap-6 md:max-w-none lg:flex-row">
              <div className="shine-border flex h-full flex-1 flex-col rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8">
                <h3 className="text-sm uppercase tracking-[0.35em] text-slate-400">Foco atual</h3>
                <p className="mt-2 text-base text-slate-300">
                  Tenho priorizado aprofundar conceitos avançados e aplicação prática desta stack nos projetos mais recentes.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {focusCurrent.map((item) => (
                    <span
                      key={`current-${item}`}
                      className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.28em] text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="shine-border flex h-full flex-1 flex-col rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8">
                <h3 className="text-sm uppercase tracking-[0.35em] text-slate-400">Foco em exploração</h3>
                <p className="mt-2 text-base text-slate-300">
                  Linhas de estudo que completam minha atuação atual e mantêm o aprendizado contínuo sempre ativo.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {focusExploration.map((item) => (
                    <span
                      key={`future-${item}`}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium uppercase tracking-[0.28em] text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.12, 0.25)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="col-span-12 flex justify-center md:block"
          >
            <div className="shine-border w-full max-w-xl rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-6 sm:p-8 md:max-w-none">
              <h3 className="text-sm uppercase tracking-[0.35em] text-slate-400">Soft skills</h3>
              <p className="mt-2 text-base text-slate-300">
                Aspectos comportamentais que mantenho em evidência para colaborar bem com equipes multidisciplinares.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {softSkillHighlights.map((skill) => (
                  <div
                    key={`soft-${skill}`}
                    className="rounded-md bg-slate-800/80 px-4 py-3 text-sm font-medium text-slate-100 shadow-inner shadow-black/20"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
