import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { aboutParagraphs } from "../utils/content";
import { fadeIn, staggerContainer } from "../utils/motion";

export function About() {
  const [
    intro = "",
    productApproach = "",
    formation = "",
    agile = "",
    projectsHighlight = "",
    portfolio = "",
    currentFocus = "",
  ] = aboutParagraphs;

  const techMatch = "React, TypeScript, Tailwind CSS";
  const [introPrefix = "", introSuffixRaw = ""] = intro.split(techMatch);
  const [introSuffixBeforeMicro = "", introSuffixAfterMicro = ""] =
    introSuffixRaw.split("microinterações");

  const [approachIntro = ""] = productApproach.split(
    "Em todos os meus projetos, busco aplicar boas práticas como "
  );

  const [formationPrefix = "", formationAfterTrybe = ""] = formation.split("Trybe");
  const [formationMiddle = "", formationAfterDevQuest = ""] =
    formationAfterTrybe.split("DevQuest");
  const [formationTailPrefix = "", formationTailSuffix = ""] =
    formationAfterDevQuest.split("Marketing");

  const [agilePrefix = "", agileAfterFrameworks = ""] = agile.split("(Scrum/Kanban)");
  const [agileBeforeTools = "", agileAfterTools = ""] =
    agileAfterFrameworks.split("Jira, Notion e GitHub Projects");

  const projectSections = projectsHighlight.split("\n").filter(Boolean);
  const [projectsLead = "", ...projectLines] = projectSections;
  const cleanProjectLines = projectLines.map((line) => line.replace("- ", ""));

  const [portfolioPrefix = "", portfolioSuffix = ""] = portfolio.split("IA Codex");

  const [currentPrefix = "", currentAfterReact = ""] = currentFocus.split("React avançado");
  const [currentMiddle = "", currentSuffix = ""] =
    currentAfterReact.split("Inteligência Artificial");

  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden px-6 py-20 sm:scroll-mt-32 sm:px-8 sm:py-24 lg:scroll-mt-36 lg:px-16"
    >
      <div className="absolute inset-0 -z-10 opacity-40 blur-3xl" aria-hidden />
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12" data-no-card>
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
                sobre mim
              </span>
            </div>
          </motion.div>
          <motion.div variants={fadeIn("up", 0.1)}>
            <div className="project-card px-8 py-8 sm:px-10 sm:py-10">
              <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl text-pretty">
                Transformo interfaces em experiências digitais fluídas com atenção a código limpo, design e experiência do usuário.
              </h2>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer()}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.35 }}
          className="about-contrast mx-auto w-full max-w-4xl"
          >
            <motion.div
              variants={fadeIn("up", 0.05)}
              className="flex flex-col gap-4 text-base leading-relaxed sm:text-lg"
            >
              {/* Card 1 – Intro */}
              <div className="project-card px-6 py-5">
                <p className="text-pretty break-words">
                  {introPrefix}
                  <span className="font-medium">React</span>,{" "}
                  <span className="font-medium">TypeScript</span>,{" "}
                  <span className="font-medium">Tailwind CSS</span>
                  {introSuffixBeforeMicro}
                  <span className="font-medium">microinterações</span>
                  {introSuffixAfterMicro}
                </p>
              </div>

              {/* Card 2 – Abordagem */}
              <div className="project-card px-6 py-5">
                <p className="text-pretty break-words">{approachIntro}</p>
                <p className="mt-2 text-pretty break-words">
                  Em todos os meus projetos, busco aplicar boas práticas como{" "}
                  <span className="font-medium">componentização</span>,{" "}
                  <span className="font-medium">tipagem estática</span>,{" "}
                  <span className="font-medium">arquitetura limpa</span> e{" "}
                  <span className="font-medium">integração contínua</span>.
                </p>
              </div>

              {/* Card 3 – Formação */}
              <div className="project-card px-6 py-5">
                <p className="text-pretty break-words">
                  {formationPrefix}
                  <span className="font-medium">Trybe</span>
                  {formationMiddle}
                  <span className="font-medium">DevQuest</span>
                  {formationTailPrefix}
                  <span className="font-medium">Marketing</span>
                  {formationTailSuffix}
                </p>
                <p className="mt-2 text-pretty break-words">
                  {agilePrefix}
                  (<span className="font-medium">Scrum/Kanban</span>)
                  {agileBeforeTools}
                  <span className="font-medium">Jira</span>,{" "}
                  <span className="font-medium">Notion</span> e{" "}
                  <span className="font-medium">GitHub Projects</span>
                  {agileAfterTools}
                </p>
              </div>

              {/* Card 4 – Projetos em destaque */}
              <div className="project-card px-6 py-5">
                <p className="text-pretty break-words">{projectsLead}</p>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-pretty">
                  {cleanProjectLines.map((item) => {
                    const [projectName, projectDescription = ""] = item.split(" – ");
                    return (
                      <li key={projectName} className="leading-relaxed">
                        <span className="font-medium">{projectName}</span>
                        {" – "}
                        {projectDescription}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Card 5 – Portfolio e foco atual */}
              <div className="project-card px-6 py-5">
                <p className="text-pretty break-words">
                  {portfolioPrefix}
                  <span className="font-medium">IA Codex</span>
                  {portfolioSuffix}
                </p>
                <p className="mt-2 text-pretty break-words">
                  {currentPrefix}
                  <span className="font-medium">React avançado</span>
                  {currentMiddle}
                  <span className="font-medium">Inteligência Artificial</span>
                  {currentSuffix}
                </p>
              </div>

              {/* Card 6 – Quote */}
              <div className="project-card relative px-6 py-6">
                <div className="absolute -top-5 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-900/20 border border-amber-900/20 sm:-top-5 sm:right-6">
                  <Sparkles className="text-amber-900" size={18} />
                </div>
                <p className="text-lg font-bold text-black text-pretty">
                  "Meu objetivo é transformar requisitos complexos em jornadas
                  intuitivas, com microinterações que contam histórias e
                  performance de primeira."
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.4em] text-gray-500">
                  foco em produto e experiência
                </p>
              </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
