import { useState, useEffect } from 'react'

export default function useWindowSize() {
  const [size, setSize] = useState([0, 0])
  useEffect(() => {
    function onResize() {
      setSize([window.innerWidth, window.innerHeight])
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return size
}