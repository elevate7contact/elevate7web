import { useEffect, useRef } from 'react'

const testimonials = [
  {
    name: 'Carlos Rodríguez',
    role: 'Fundador de SaaS B2B',
    avatar: 'CR',
    text: 'Nuestro onboarding era un cuello de botella enorme — todo manual, todo dependía de que alguien estuviera disponible. Construyeron el agente de IA con n8n y Claude API y el proceso simplemente dejó de ser un problema. Funciona solo.',
    highlight: 'El proceso dejó de depender de que alguien estuviera disponible',
    color: 'neon',
  },
  {
    name: 'Andrés Morales',
    role: 'Emprendedor · E-commerce',
    avatar: 'AM',
    text: 'Me cansé de hacer seguimiento manualmente. Era agotador y siempre se me iban cosas. Automatizaron el pipeline completo — el sistema califica, nutre y avisa cuando alguien está listo. Yo ya no tengo que perseguir a nadie.',
    highlight: 'Dejé de perseguir clientes manualmente',
    color: 'gold',
  },
  {
    name: 'Valentina Cruz',
    role: 'Directora de Marketing Digital',
    avatar: 'VC',
    text: 'El mayor dolor era el tiempo que me tomaba producir contenido. Semanas planeando, grabando, editando. Ahora el sistema genera piezas con mi voz y estilo. Recuperé tiempo que antes simplemente no tenía.',
    highlight: 'Recuperé tiempo que antes simplemente no tenía',
    color: 'neon',
  },
  {
    name: 'Sebastián Méndez',
    role: 'CEO · Agencia de Servicios',
    avatar: 'SM',
    text: 'El problema era simple: nadie respondía a tiempo y los prospectos se iban. Implementaron un agente de IA en WhatsApp en 7 días. Ahora hay respuesta inmediata siempre — no importa la hora ni el día.',
    highlight: 'Ahora hay respuesta inmediata — siempre',
    color: 'white',
  },
]

export default function Testimonials() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonios" ref={sectionRef} className="py-28 px-6 relative">
      <div className="divider-neon mb-20" />

      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="font-dm text-xs text-neon tracking-widest uppercase mb-3">Casos reales · Dolores resueltos con IA</p>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-white mb-4">
            Problemas reales que{' '}
            <span className="text-neon">la IA resolvió</span>
          </h2>
          <p className="font-dm text-white/50 max-w-xl mx-auto leading-relaxed">
            Founders que tenían un dolor operativo concreto — y lo eliminaron
            implementando IA en su negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal glass rounded-2xl p-8 flex flex-col gap-5 ${
                t.color === 'gold' ? 'glass-gold' : ''
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div>
                <p className={`font-syne font-semibold text-base mb-3 ${
                  t.color === 'neon' ? 'text-neon' : t.color === 'gold' ? 'text-gold' : 'text-white'
                }`}>
                  "{t.highlight}"
                </p>
                <p className="font-dm text-sm text-white/55 leading-relaxed">{t.text}</p>
              </div>

              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-syne font-bold text-sm ${
                  t.color === 'neon'
                    ? 'bg-neon/15 text-neon'
                    : t.color === 'gold'
                    ? 'bg-gold/15 text-gold'
                    : 'bg-white/10 text-white'
                }`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-syne font-semibold text-white text-sm">{t.name}</p>
                  <p className="font-dm text-xs text-white/40">{t.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#D4A843">
                      <path d="M6 1l1.4 2.8 3.1.45-2.25 2.2.53 3.1L6 8.1l-2.78 1.45.53-3.1L1.5 4.25l3.1-.45z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
