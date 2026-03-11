import { useEffect, useMemo, useState } from 'react'
import clsx from 'clsx'

type TypewriterProps = {
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
  className?: string
}

export function Typewriter({
  phrases,
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseTime = 1500,
  className
}: TypewriterProps) {
  const normalizedPhrases = useMemo(
    () => (phrases.length > 0 ? phrases : ['']),
    [phrases]
  )

  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = normalizedPhrases[phraseIndex]

    if (!isDeleting && displayText === currentPhrase) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setPhraseIndex((prev) => (prev + 1) % normalizedPhrases.length)
      return
    }

    const timeout = setTimeout(() => {
      const delta = isDeleting ? -1 : 1
      setDisplayText(currentPhrase.slice(0, displayText.length + delta))
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [
    displayText,
    normalizedPhrases,
    phraseIndex,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseTime
  ])

  return (
    <span className={clsx('relative inline-flex items-center', className)}>
      <span>{displayText}</span>
      <span className="ml-1 h-5 w-[2px] animate-pulse bg-primary" />
    </span>
  )
}
