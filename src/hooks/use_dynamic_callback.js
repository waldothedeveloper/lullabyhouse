// Dependencies
import { useCallback, useRef } from 'react'

// Internals
import { useIsomorphicLayoutEffect } from '@/hooks/use_isomorphic_layout_effect'

export const useDynamicCallback = (callback) => {
  const ref = useRef(callback)

  useIsomorphicLayoutEffect(() => {
    ref.current = callback
  }, [callback])

  return useCallback((...args) => ref.current(...args), [])
}
