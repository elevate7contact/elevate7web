import { useEffect, useRef } from 'react'

const differentiators = [
  {
    icon: '🤖',
    title: 'IA de verdad, no de PowerPoint',
    desc: 'No te vendemos diapositivas bonitas sobre IA. Te construimos sistemas reales con Claude API, n8n, Make y GPT-4 que funcionan desde el día 1.',
  },
  {
    icon: '📊',
    title: 'Lo construí desde adentro',
    desc: 'Antes de venderlo, lo viví. Automaticé mis propios negocios con IA y sé exactamente qué funciona, qué no, y por dónde hay que empezar.',
  },
  {
    icon: '⚙️',
    title: 'Un equipo, todo el stack',
    desc: 'Ventas, contenido, operaciones — todo automatizado desde un solo lugar. Sin coordinar a 5 freelancers distintos ni gestionar herramientas por tu cuenta.',
  },
  {
    icon: '🎯',
    title: 'Resultados en 7 días o explicación',
    desc: 'Cada proyecto arranca con metas claras. Si no hay resultado visible en 7 días, te decimos exactamente por qué y cómo lo resolvemos.',
  },
]

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="nosotros" ref={sectionRef} className="py-24 px-6 relative">
      <div className="divider-neon mb-20" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* ── IZQUIERDA: Historia ── */}
          <div className="reveal">
            <p className="font-dm text-xs text-neon tracking-widest uppercase mb-3">
              Agencia de IA · Bogotá, Colombia
            </p>
            <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-white mb-6 leading-tight">
              Construimos la IA<br />
              que hace crecer{' '}
              <span className="text-neon">tu negocio.</span>
            </h2>

            {/* Quote */}
            <div className="glass rounded-2xl p-6 border border-white/8 mb-6">
              <p className="font-dm text-base text-white/70 leading-relaxed mb-5">
                "Empecé automatizando mis propios negocios con IA porque no podía darme
                el lujo de contratar un equipo. Descubrí que con n8n, Claude API y las
                herramientas correctas, podía operar un negocio completo prácticamente solo.{' '}
                <span className="text-white">Eso me cambió todo.</span> Por eso creé Elevate Zeven:
                para que cualquier founder tenga la misma infraestructura de IA que usan
                las grandes empresas — sin el presupuesto ni el equipo que ellas tienen."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                <img
                  src="/juan.jpg"
                  alt="Juan Millán — Founder de Elevate Zeven"
                  className="w-10 h-10 rounded-xl object-cover object-top"
                  loading="lazy"
                />
                <div>
                  <p className="font-syne font-semibold text-white text-sm">Juan Millán</p>
                  <p className="font-dm text-xs text-neon">Founder & Operator · Bogotá, Colombia</p>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div>
              <p className="font-dm text-xs text-white/30 uppercase tracking-widest mb-3">
                Lo que implementamos
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Agentes de IA',
                  'Automatizaciones n8n',
                  'Contenido con IA',
                  'Clones digitales',
                  'Pipelines de ventas',
                  'Infraestructura IA',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="font-dm text-xs text-white/60 glass px-3 py-1 rounded-full border border-white/8"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── DERECHA: Diferenciadores 2x2 ── */}
          <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ transitionDelay: '150ms' }}>
            {differentiators.map((item, i) => (
              <div
                key={item.title}
                className="glass rounded-2xl p-5 border border-white/8 hover:border-neon/20 transition-colors"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="w-10 h-10 glass-neon rounded-xl flex items-center justify-center text-lg mb-4">
                  {item.icon}
                </div>
                <p className="font-syne font-semibold text-white text-sm mb-2">{item.title}</p>
                <p className="font-dm text-xs text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
