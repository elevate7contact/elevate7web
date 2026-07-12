import { useEffect, useRef } from 'react'

const pains = [
  {
    icon: '🤖',
    text: 'Haces manualmente lo que un agente de IA podría hacer en segundos — respuestas, seguimientos, reportes',
  },
  {
    icon: '📉',
    text: 'Pierdes leads porque no hay ningún sistema de IA que los capture, califique y nutra por ti',
  },
  {
    icon: '📱',
    text: 'Produces contenido a mano mientras tu competencia usa IA para generar en masa con su propia voz',
  },
  {
    icon: '💸',
    text: 'Pagas por tareas repetitivas que n8n, Make o un agente de IA harían por centavos al día',
  },
  {
    icon: '🔁',
    text: 'Tus herramientas no se hablan entre sí — CRM, WhatsApp, email, todo en silos, todo manual',
  },
  {
    icon: '🧭',
    text: 'Sabes que la IA puede transformar tu negocio pero no sabes qué implementar ni por dónde empezar',
  },
]

export default function PainSection() {
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
    <section ref={sectionRef} className="py-24 px-6 relative">
      <div className="divider-neon mb-20" />

      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-14">
          <p className="font-dm text-xs text-white/40 tracking-widest uppercase mb-3">
            ¿Te suena familiar?
          </p>
          <h2 className="font-syne font-extrabold text-3xl md:text-5xl text-white mb-4 leading-tight">
            El problema no es tu negocio.{' '}
            <span className="text-neon text-glow-neon">Es operar sin IA en 2025.</span>
          </h2>
          <p className="font-dm text-white/50 max-w-lg mx-auto text-base leading-relaxed">
            Mientras lees esto, negocios de tu mismo tamaño están usando IA para trabajar menos
            y crecer más. Cada semana sin automatización es dinero y tiempo que no recuperas.
          </p>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {pains.map((pain, i) => (
            <div
              key={pain.text}
              className="glass rounded-2xl p-5 flex items-start gap-4 border border-white/5 hover:border-red-500/20 transition-colors"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="text-2xl shrink-0 mt-0.5">{pain.icon}</span>
              <p className="font-dm text-sm text-white/65 leading-relaxed">{pain.text}</p>
            </div>
          ))}
        </div>

        <div className="reveal glass-neon rounded-2xl p-8 text-center border border-neon/20">
          <p className="font-syne font-bold text-xl text-white mb-2">
            Si marcaste aunque sea uno → hay una solución con IA para eso.
          </p>
          <p className="font-dm text-white/55 text-sm mb-6 max-w-md mx-auto">
            En 20 minutos te decimos exactamente qué proceso está frenando tu negocio
            y cómo un sistema de IA lo elimina — sin contratar más personas.
          </p>
          <a href="#opciones" className="btn-neon inline-block px-8 py-3.5 rounded-xl text-sm">
            Quiero mi diagnóstico de IA gratis →
          </a>
          <p className="font-dm text-xs text-white/25 mt-3">Sin costo · Sin compromiso · 20 minutos</p>
        </div>
      </div>
    </section>
  )
}
