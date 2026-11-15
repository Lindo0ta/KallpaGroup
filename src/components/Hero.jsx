import Reveal from './Reveal'

export default () => (
  <section id="inicio" className="hero">
    <Reveal className="hero-content" from="left">
      <h1>Ingeniería integral<br />para un futuro sostenible</h1>
      <p>Soluciones en ingeniería aeronáutica, energías renovables, agro sostenible, medición, capacitación y más.</p>
      <div className="actions">
        <a className="btn btn-green" href="#servicios">Nuestros servicios</a>
        <a className="btn btn-outline" href="#nosotros">Conócenos</a>
      </div>
    </Reveal>
  </section>
)