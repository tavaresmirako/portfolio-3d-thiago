export type NavItem = {
  id: string
  label: string
  icon?: string
}

export type Metric = {
  label: string
  value: string
  caption: string
}

export type StackItem = {
  name: string
  iconUrl: string
}

export type SkillLevel = 'Iniciante' | 'Intermediário' | 'Avançado'

export type Project = {
  slug: string
  title: string
  description: string
  technologies: string[]
  repoUrl: string
  liveUrl?: string
  imageUrl: string
  accent: string
  role: string
  category: 'Desafios' | 'Pessoais' | 'Profissionais'
  status?: string
  learned?: string[]
  repoHighlights?: string[]
  gallery?: string[] // Can contain image or video URLs
  desafios?: string[]
  nextSteps?: string[]
  imageFit?: 'cover' | 'contain'
}

export type Skill = {
  name: string
  category: 'Frontend' | 'Backend' | 'Conceitos'
  iconUrl?: string
  iconSymbol?: string
  highlight?: boolean
  level?: SkillLevel
}

export type SoftSkill = {
  title: string
  description: string
}

export type Certificate = {
  title: string
  issuer: string
  imageUrl: string
  url: string
}
