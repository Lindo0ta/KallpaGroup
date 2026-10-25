import { useState } from 'react'
import { LuMenu, LuX } from 'react-icons/lu'
import { NAV } from '../data'

export default () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <a href="#inicio"><img className="logo" src="/logo.png" alt="Kallpagroup S.A.S" /></a>
      <nav className={open ? 'open' : ''} onClick={() => setOpen(false)}>
        {NAV.map(item => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
      </nav>
      <a className="btn btn-green" href="#contacto">Cotiza ahora</a>
      <button className="burger" aria-label="Menú" onClick={() => setOpen(!open)}>
        {open ? <LuX /> : <LuMenu />}
      </button>
    </header>
  )
}