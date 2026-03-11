import { useState } from 'react'
import { motion } from 'framer-motion'
import { ProjectCard } from '../components/ProjectCard'
import { ProjectModal } from '../components/ProjectModal'
import { fadeIn, staggerContainer } from '../utils/motion'
import type { Project } from '../types/content'
import { projects } from '../utils/content'

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 overflow-hidden px-6 py-20 sm:scroll-mt-32 sm:px-8 sm:py-24 lg:scroll-mt-36 lg:px-16"
    >
      <div className="absolute inset-0 -z-10 bg-noise-texture opacity-40" aria-hidden />
      {/* data-no-card prevents global paper card rule from applying here */}
      <div className="mx-auto w-full max-w-6xl space-y-12" data-no-card>
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
                projetos
              </span>
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn("up", 0.1)}>
            <div className="project-card px-8 py-8 sm:px-10 sm:py-10">
              <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl text-pretty">
                Projetos práticos que traduzem meu aprendizado, evolução e visão de produto
              </h2>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("up", 0.15)}>
            <div className="project-card px-8 py-6 sm:px-10 sm:py-8">
              <p className="text-base leading-relaxed text-gray-800 sm:text-lg text-pretty">
                Seleção de aplicações e desafios desenvolvidos com foco em usabilidade, arquitetura moderna e aprendizado contínuo. Cada projeto reflete minha evolução prática como desenvolvedor full stack em formação.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <div key={project.slug} className="project-card">
              <ProjectCard
                project={project}
                index={index}
                onOpenDetails={(proj) => setSelectedProject(proj)}
              />
            </div>
          ))}
        </div>
      </div>
      {selectedProject ? (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      ) : null}
    </section>
  )
}
