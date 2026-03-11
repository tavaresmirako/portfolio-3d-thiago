import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PhoneCall,
} from "lucide-react";
import { whatsappLink } from "../utils/content";
import { fadeIn, scaleIn, staggerContainer } from "../utils/motion";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden px-6 py-20 sm:scroll-mt-32 sm:px-8 sm:py-24 lg:scroll-mt-36 lg:px-16"
    >
      <div className="absolute inset-0 -z-10 bg-noise-texture opacity-40" aria-hidden />
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
                contato
              </span>
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn("up", 0.1)}>
            <div className="project-card px-8 py-8 sm:px-10 sm:py-10">
              <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl text-pretty">
                Vamos conversar sobre o próximo projeto?
              </h2>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("up", 0.15)}>
            <div className="project-card px-8 py-6 sm:px-10 sm:py-8">
              <p className="text-base font-bold leading-relaxed text-gray-800 sm:text-lg text-pretty">
                Preferi substituir formulários por uma conversa direta — clique, abra o WhatsApp e me conte o desafio que precisa ganhar vida.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.06)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.4 }}
          className="rounded-[2.5rem] border border-white/10 bg-slate-900/70 p-8 text-center backdrop-blur-xl sm:p-10"
        >
          <motion.div
            variants={scaleIn}
            className="mx-auto grid max-w-4xl grid-cols-12 gap-6 text-left text-slate-300"
          >
            <div className="col-span-12 flex flex-col items-center gap-4 text-center lg:col-span-4 lg:items-start lg:text-left">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.4em] text-slate-400">
                <MessageCircle size={18} className="text-accent" />
                resposta rápida
              </div>
              <h3 className="font-display text-[clamp(2rem,4vw,2.6rem)] font-semibold text-white">
                Atendimento direto com Thiago Tavares
              </h3>
              <p className="text-pretty text-slate-300">
                Quer revisar um design, discutir integrações e Automações com IA ou explorar uma
                vaga? Envie uma mensagem e eu retorno rapidamente com insights e
                próximos passos. Disponibilidade imediata para projetos remotos
                ou presenciais no Rio de Janeiro.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-accent/40 bg-gradient-to-r from-accent/40 via-emerald-400/35 to-primary/40 px-8 py-4 text-lg font-semibold text-white shadow-glow-accent transition-transform duration-500 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label="Conversar com Thiago Tavares pelo WhatsApp"
              >
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <PhoneCall className="text-white transition-transform duration-500 group-hover:rotate-6" />
                </span>
                Falar com Thiago  no WhatsApp
              </a>
            </div>

            <div className="col-span-12 grid gap-4 text-sm lg:col-span-8 lg:grid-cols-2">
              <a
                href="tel:+5521992115015"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-colors duration-300 hover:border-primary/60 hover:bg-primary/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-label="Ligar para +55 21 992115015"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Phone size={18} className="text-primary" />
                </span>
                +55 21 992115015
              </a>
              <a
                href="mailto:tavaresmirako@gmail.com"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-colors duration-300 hover:border-primary/60 hover:bg-primary/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-label="Enviar e-mail para tavaresmirako@gmail.com"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Mail size={18} className="text-primary" />
                </span>
                tavaresmirako@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/thiago-tavares-6328936a/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-colors duration-300 hover:border-primary/60 hover:bg-primary/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-label="Abrir perfil no LinkedIn"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Linkedin size={18} className="text-primary" />
                </span>
                linkedin.com/in/thiago-tavares-6328936a
              </a>
              <a
                href="https://github.com/tavaresmirako"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-colors duration-300 hover:border-primary/60 hover:bg-primary/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-label="Abrir perfil no GitHub"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Github size={18} className="text-primary" />
                </span>
                github.com/tavaresmirako
              </a>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-colors duration-300">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <MapPin size={18} className="text-primary" />
                </span>
                Rio de Janeiro · Disponível para viagens
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
