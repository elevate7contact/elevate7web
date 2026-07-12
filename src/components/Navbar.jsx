import { useState, useEffect } from 'react'

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass border-b border-white/5 py-3' : 'py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <img src="/logo.jpg" alt="Elevate Zeven" className="w-9 h-9 rounded-lg" />
          <span className="font-syne font-bold text-white text-lg tracking-tight">
            Elevate <span className="text-neon">Zeven</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-dm text-sm text-white/60 hover:text-white transition-colors duration-200">
              {l.label}
            </a>
          ))}
        </div>

        <a href="#llamada-gratis" className="hidden md:block btn-neon text-sm px-5 py-2.5 rounded-lg">
          Llamada gratis
        </a>

        <button className="md:hidden text-white/70 hover:text-white" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? (
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden glass border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="font-dm text-white/70 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#llamada-gratis" onClick={() => setMenuOpen(false)} className="btn-neon text-sm px-5 py-3 rounded-lg text-center">
            Llamada gratis
          </a>
        </div>
      )}
    </nav>
  )
}
