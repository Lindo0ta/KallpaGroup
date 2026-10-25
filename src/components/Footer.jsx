import { LuLeaf } from 'react-icons/lu'
import { FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa6'
import { NAV } from '../data'

export default () => (
  <>
    <footer id="contacto" className="frame footer">
      <div className="footer-brand">
        <img className="logo" src="/logo.png" alt="Kallpagroup S.A.S" />
        <span className="tagline">INGENIERÍA QUE IMPULSA EL FUTURO</span>
        <div className="socials">
          {[FaLinkedinIn, FaInstagram, FaYoutube].map((Icon, i) => <a key={i} href="#"><Icon /></a>)}
        </div>
      </div>
      <nav>{NAV.map(item => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</nav>
      <div className="commitment">
        <LuLeaf />
        <span>Comprometidos con un futuro sostenible</span>
      </div>
    </footer>
    <div className="strip" />
    <p className="slogan">De la ingeniería al cielo, del campo al futuro.</p>
  </>
)