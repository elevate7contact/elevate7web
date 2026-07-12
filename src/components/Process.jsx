import { useEffect, useRef } from 'react'

const steps = [
  {
    num: '01',
    title: 'Diagnóstico de IA',
    subtitle: '20 minutos · Sin costo',
    description:
      '¿No sabes qué está frenando tu negocio? Mapeamos tu operación completa e identificamos exactamente qué procesos le están costando tiempo, dinero y energía — y cuáles puede resolver la IA.',
    color: 'neon',
  },
  {
    num: '02',
    title: 'Arquitectura de tu Stack',
    subtitle: 'Plan personalizado',
    description:
      '¿No sabes qué herramientas usar ni cómo conectarlas? Diseñamos el sistema completo: qué automatizar primero, con qué herramientas (n8n, Make, Claude, GPT-4) y en qué orden.',
    color: 'white',
  },
  {
    num: '03',
    title: 'Primer Sistema Activo',
    subtitle: 'Funcionando en 7 días',
    description:
      '¿Cansado de proyectos que nunca arrancan? Implementamos la primera automatización de alto impacto en 7 días. Un sistema real, funcionando, resolviendo un dolor concreto.',
    color: 'white',
  },
  {
    num: '04',
    title: 'Crecimiento Continuo',
    subtitle: 'Retainer mensual',
    description:
      '¿La IA se implementa y luego nadie la mantiene? Somos tu equipo permanente. Cada mes sumamos más automatizaciones, mejoramos lo que ya funciona y eliminamos nuevos cuellos de botella.',
    color: 'gold',
  },
]

export default function Process() {
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
    <section id="proceso" ref={sectionRef} className="py-28 px-6 relative">
      <div className="divider-neon mb-20" />

      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="font-dm text-xs text-neon tracking-widest uppercase mb-3">Proceso de implementación · Bogotá & remoto</p>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-white mb-4">
            Del dolor operativo a la{' '}
            <span className="text-gold text-glow-gold">solución con IA en 4 pasos</span>
          </h2>
          <p className="font-dm text-white/50 max-w-xl mx-auto leading-relaxed">
            Sin reuniones infinitas. Sin promesas vacías. Un proceso diseñado para
            que veas IA funcionando en tu negocio — rápido y sin complicaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="reveal glass rounded-2xl p-7 relative overflow-hidden"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`font-syne font-extrabold text-6xl mb-4 leading-none ${
                step.color === 'neon' ? 'text-neon/20' : step.color === 'gold' ? 'text-gold/20' : 'text-white/10'
              }`}>
                {step.num}
              </div>
              <h3 className="font-syne font-bold text-lg text-white mb-1">{step.title}</h3>
              <p className={`font-dm text-xs mb-3 ${
                step.color === 'neon' ? 'text-neon' : step.color === 'gold' ? 'text-gold' : 'text-white/40'
              }`}>
                {step.subtitle}
              </p>
              <p className="font-dm text-sm text-white/50 leading-relaxed">{step.description}</p>

              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="#00e664" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <p className="font-dm text-white/40 text-sm mb-5">
            ¿Cuál es el cuello de botella más grande en tu operación? Empieza por ahí.
          </p>
          <a href="#opciones" className="btn-neon inline-block px-8 py-4 rounded-xl text-base">
            Identificar mi mayor dolor operativo — gratis →
          </a>
        </div>
      </div>
    </section>
  )
}
