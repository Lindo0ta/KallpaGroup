import { useState } from 'react'
import { LuCheck } from 'react-icons/lu'
import { SERVICES } from '../data'

const trackPointer = ({ currentTarget: el, clientX, clientY }) => {
  const { left, top } = el.getBoundingClientRect()
  el.style.setProperty('--x', `${clientX - left}px`)
  el.style.setProperty('--y', `${clientY - top}px`)
}

export default () => {
  const [active, setActive] = useState(0)
  const { title, intro, items } = SERVICES[active]

  return (
    <section id="servicios" className="frame services">
      {[1, 2, 3].map(n => <span key={n} className={`blob b${n}`} />)}
      <h2>Nuestros servicios</h2>
      <div className="services-grid">
        <div className="tabs" role="tablist">
          {SERVICES.map(({ Icon, title }, i) => (
            <button
              key={title}
              role="tab"
              aria-selected={i === active}
              className="glass tab"
              onClick={() => setActive(i)}
              onPointerMove={trackPointer}
            >
              <Icon />
              <span>{title}</span>
            </button>
          ))}
        </div>
        <article key={active} className="glass panel" onPointerMove={trackPointer}>
          <h3>{title}</h3>
          <p>{intro}</p>
          <ul>
            {items.map((item, i) => {
              const [head, body] = item.split(/:(.+)/)
              return (
                <li key={item} style={{ '--i': i }}>
                  <LuCheck />
                  <span>{body ? <><b>{head}</b>:{body}</> : item}</span>
                </li>
              )
            })}
          </ul>
        </article>
      </div>
    </section>
  )
}