import { useEffect, useState } from 'react'

export function useScrollSpy(ids: string[], offset = 120): string {
  const [activeId, setActiveId] = useState(ids[0] ?? '')

  useEffect(() => {
    const handler = () => {
      const position = window.scrollY + offset
      let current = ids[0] ?? ''

      for (const id of ids) {
        const element = document.getElementById(id)
        if (element && element.offsetTop <= position) {
          current = id
        }
      }

      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4

      if (atBottom && ids.length > 0) {
        current = ids[ids.length - 1]
      }

      setActiveId(current)
    }

    handler()
    window.addEventListener('scroll', handler, { passive: true })
    window.addEventListener('resize', handler)

    return () => {
      window.removeEventListener('scroll', handler)
      window.removeEventListener('resize', handler)
    }
  }, [ids, offset])

  return activeId
}
