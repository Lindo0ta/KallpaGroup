import { useEffect, useRef } from 'react'

export default ({ as: Tag = 'div', from = 'up', delay = 0, className = '', ...props }) => {
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([{ isIntersecting }]) => isIntersecting && (ref.current.classList.add('in'), observer.disconnect()),
      { threshold: 0.15 }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return <Tag ref={ref} className={`reveal from-${from} ${className}`} style={{ '--delay': `${delay}ms` }} {...props} />
}