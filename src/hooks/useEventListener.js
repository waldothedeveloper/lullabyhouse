import { useCallback, useEffect, useRef } from 'react'

export const getRefElement = (element) => {
  if (element && 'current' in element) {
    return element.current
  }

  return element
}

const isSsr = !(typeof window !== 'undefined' && window.document?.createElement)

export const useEventListener = ({
  type,
  listener,
  element = isSsr ? undefined : window,
  options,
}) => {
  const savedListener = useRef()

  useEffect(() => {
    savedListener.current = listener
  }, [listener])

  const handleEventListener = useCallback((event) => {
    savedListener.current?.(event)
  }, [])

  useEffect(() => {
    const target = getRefElement(element)

    target?.addEventListener(type, handleEventListener, options)

    return () => target?.removeEventListener(type, handleEventListener)
  }, [type, element, options, handleEventListener])
}
