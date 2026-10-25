import Header from './components/Header'
import Hero from './components/Hero'
import Lines from './components/Lines'
import Services from './components/Services'
import Impact from './components/Impact'
import Footer from './components/Footer'
import Reveal from './components/Reveal'

export default () => (
  <>
    <div className="frame">
      <Header />
      <Hero />
    </div>
    <main className="page">
  <Reveal><Lines /></Reveal>
  <Reveal from="left"><Services /></Reveal>
  <Reveal from="right"><Impact /></Reveal>
  <Reveal><Footer /></Reveal>
</main>
  </>
)