import { LuArrowRight } from 'react-icons/lu'
import { LINES } from '../data'
import Reveal from './Reveal'

export default () => (
  <section className="lines">
    <h2>Nuestras líneas de negocio</h2>
    <div className="cards">
      {LINES.map(({ Icon, title, text }, i) => (
        <Reveal as="article" key={title} className="card" delay={i * 100}>
          <Icon className="card-icon" />
          <h3>{title}</h3>
          <p>{text}</p>
          <LuArrowRight className="card-arrow" />
        </Reveal>
      ))}
    </div>
  </section>
)