import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

export function useTypewriter(
  words: string[],
  typingSpeed = 85,
  deletingSpeed = 40,
  pause = 1600,
): string {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) {
      setText(words[0] ?? '')
      return
    }

    const current = words[index % words.length] ?? ''

    if (!deleting && text === current) {
      const timeout = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(timeout)
    }

    if (deleting && text === '') {
      setDeleting(false)
      setIndex((value) => (value + 1) % words.length)
      return
    }

    const timeout = setTimeout(() => {
      setText(current.slice(0, deleting ? text.length - 1 : text.length + 1))
    }, deleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pause, reduced])

  return text
}
