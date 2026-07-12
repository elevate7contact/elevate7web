import { useEffect, useRef } from 'react'

const services = [
  {
    icon: '🔍',
    title: 'Diagnóstico de IA',
    tag: 'Gratis · 20 min',
    tagColor: 'neon',
    description:
      '¿No sabes qué automatizar ni por dónde empezar? Analizamos tu operación completa y te decimos exactamente qué procesos le están costando tiempo y dinero — y cómo la IA los resuelve.',
    highlight: true,
  },
  {
    icon: '🤖',
    title: 'Agentes de IA para tu Operación',
    tag: 'Adiós a las tareas repetitivas',
    tagColor: 'white',
    description:
      '¿Cuánto tiempo pierdes respondiendo lo mismo, haciendo seguimiento manual o atendiendo consultas básicas? Construimos agentes de IA que se encargan de todo eso — sin que toques nada.',
  },
  {
    icon: '⚡',
    title: 'Automatización de Contenido',
    tag: 'Sin horas pegado a la pantalla',
    tagColor: 'white',
    description:
      '¿Sabes que necesitas publicar pero nunca tienes tiempo? Creamos sistemas que generan contenido con tu voz y tu estilo usando IA — sin que pases horas frente a una pantalla en blanco.',
  },
  {
    icon: '🔗',
    title: 'Infraestructura de Automatización',
    tag: 'Todo conectado, nada manual',
    tagColor: 'white',
    description:
      '¿Tus herramientas no se hablan entre sí y todo termina en un Excel? Conectamos tu CRM, WhatsApp, email y redes con n8n o Make para que la información fluya sola — sin intervención tuya.',
  },
  {
    icon: '🧬',
    title: 'Clon Digital con IA',
    tag: 'Tu presencia, sin tu tiempo',
    tagColor: 'gold',
    description:
      '¿No puedes estar en todos lados pero tu negocio lo necesita? Creamos tu avatar de IA — con tu voz, tu cara y tu conocimiento — que genera contenido y responde en tu nombre cuando no estás.',
  },
  {
    icon: '🔧',
    title: 'Stack de IA Mensual',
    tag: 'Tu equipo de IA permanente',
    tagColor: 'white',
    description:
      '¿Implementaste algo de IA pero nadie lo mantiene y dejó de funcionar? Somos tu equipo permanente: construimos, mantenemos y mejoramos tu infraestructura de IA mes a mes.',
  },
]

export default function Services() {
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
    <section id="servicios" ref={sectionRef} className="py-28 px-6 relative">
      <div className="divider-neon mb-20" />

      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="font-dm text-xs text-neon tracking-widest uppercase mb-3">Servicios de automatización con IA</p>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-white mb-4">
            Cada problema operativo{' '}
            <span className="text-neon">tiene una solución con IA.</span>
          </h2>
          <p className="font-dm text-white/50 max-w-xl mx-auto text-base leading-relaxed">
            No vendemos herramientas ni promesas. Identificamos el dolor exacto en tu operación
            y construimos el sistema de IA que lo elimina.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`reveal service-card glass rounded-2xl p-7 cursor-default ${s.highlight ? 'glass-neon border-glow' : ''}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-3xl mb-4">{s.icon}</div>

              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="font-syne font-bold text-lg text-white leading-tight">{s.title}</h3>
                <span className={`shrink-0 text-xs font-dm px-2 py-1 rounded-full ${
                  s.tagColor === 'neon'
                    ? 'bg-neon/10 text-neon border border-neon/20'
                    : s.tagColor === 'gold'
                    ? 'bg-gold/10 text-gold border border-gold/20'
                    : 'bg-white/5 text-white/40 border border-white/8'
                }`}>
                  {s.tag}
                </span>
              </div>

              <p className="font-dm text-sm text-white/55 leading-relaxed">{s.description}</p>

              {s.highlight && (
                <a href="#llamada-gratis" className="mt-5 block text-center btn-neon text-sm px-4 py-2.5 rounded-lg">
                  Agendar diagnóstico →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
