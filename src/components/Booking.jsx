import { useEffect, useRef, useState } from 'react'

const CAL_FREE  = 'https://cal.com/elevate-zeven/20min'
const CAL_30MIN = 'https://cal.com/elevate-zeven/30min'
const CAL_60MIN = 'https://cal.com/elevate-zeven/1hour'

export default function Booking() {
  const sectionRef = useRef(null)
  const [loading, setLoading] = useState(null) // '30min' | '60min' | null
  const [error, setError] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handlePaidBook = async (plan) => {
    setLoading(plan)
    setError('')
    try {
      const res = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error(data.error || 'Error al crear sesión de pago')
      }
    } catch (err) {
      console.error(err)
      setError('Hubo un problema al procesar el pago. Escríbenos a elevate7contact@gmail.com')
      setLoading(null)
    }
  }

  return (
    <section id="opciones" ref={sectionRef} className="py-28 px-6 relative">
      <div className="divider-neon mb-20" />
      <span id="llamada-gratis" className="absolute -top-20" />
      <span id="agendar" className="absolute -top-20" />

      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-14">
          <p className="font-dm text-xs text-neon tracking-widest uppercase mb-3">Agenda tu diagnóstico de automatización · Sin costo</p>
          <h2 className="font-syne font-bold text-4xl md:text-5xl text-white mb-4">
            Descubre qué está frenando tu negocio.{' '}
            <span className="text-neon text-glow-neon">Cuesta $0.</span>
          </h2>
          <p className="font-dm text-white/50 max-w-lg mx-auto leading-relaxed">
            En 20 minutos identificamos el mayor cuello de botella en tu operación
            y te explicamos cómo la IA lo resuelve. Sin venderte nada — solo el diagnóstico honesto que necesitas.
          </p>
        </div>

        {error && (
          <div className="reveal glass rounded-xl px-5 py-3 border border-red-500/20 mb-6 max-w-xl mx-auto text-center">
            <p className="font-dm text-sm text-red-400">{error}</p>
          </div>
        )}

        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">

          {/* ── Gratis ── */}
          <div className="glass-neon rounded-2xl p-7 flex flex-col border border-neon/20">
            <div className="flex items-center justify-between mb-5">
              <span className="font-dm text-xs text-neon bg-neon/10 border border-neon/20 px-3 py-1 rounded-full">🔥 Empieza aquí</span>
              <span className="text-2xl">🎁</span>
            </div>
            <p className="font-syne font-bold text-xl text-white mb-1">Diagnóstico gratuito</p>
            <p className="font-dm text-sm text-neon mb-2">20 minutos · $0 · Sin tarjeta</p>
            <p className="font-dm text-xs text-white/35 mb-5">El diagnóstico que te dice exactamente qué automatizar primero para ver resultados esta semana.</p>
            <ul className="font-dm text-sm text-white/60 flex flex-col gap-2.5 mb-8 flex-1">
              {[
                'Radiografía de tu operación actual',
                'Los 3 puntos que más te están frenando',
                'Hoja de ruta de 30 días personalizada',
                'Preguntas sin límite — estrategia y técnica',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-neon mt-0.5 shrink-0">✓</span><span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={CAL_FREE}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon w-full py-3.5 rounded-xl text-sm text-center block"
            >
              Reservar mi diagnóstico gratis →
            </a>
            <p className="font-dm text-xs text-white/25 text-center mt-3">Sin tarjeta · Sin compromiso · Sin presión de venta</p>
          </div>

          {/* ── 30 min ── */}
          <div className="glass rounded-2xl p-7 flex flex-col border border-white/8 hover:border-neon/25 transition-colors">
            <div className="flex items-center justify-between mb-5">
              <span className="font-dm text-xs text-white/40 bg-white/5 border border-white/10 px-3 py-1 rounded-full">Consultoría rápida</span>
              <span className="text-2xl">⚡</span>
            </div>
            <p className="font-syne font-bold text-xl text-white mb-1">Sesión enfocada 30 min</p>
            <p className="font-dm text-sm text-white/50 mb-2">
              <span className="font-syne font-bold text-3xl text-white">$50</span>
              <span className="text-sm ml-1">USD</span>
            </p>
            <p className="font-dm text-xs text-white/35 mb-5">Para cuando ya sabes qué quieres resolver y necesitas un experto que te diga exactamente cómo hacerlo.</p>
            <ul className="font-dm text-sm text-white/60 flex flex-col gap-2.5 mb-8 flex-1">
              {[
                'Sesión privada 1 a 1 sin distracciones',
                'Revisión profunda de tu estrategia o técnica',
                'Plan de acción concreto al terminar',
                'Grabación completa de la sesión',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-neon mt-0.5 shrink-0">✓</span><span>{item}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => handlePaidBook('30min')}
              disabled={loading === '30min'}
              className="btn-neon w-full py-3.5 rounded-xl text-sm disabled:opacity-60 disabled:cursor-wait"
            >
              {loading === '30min' ? 'Preparando pago...' : 'Agendar sesión · $50 USD →'}
            </button>
            <p className="font-dm text-xs text-white/25 text-center mt-3">Pago seguro con Stripe · Elige fecha tras pagar</p>
          </div>

          {/* ── 1 hora — DESTACADA ── */}
          <div className="glass-gold rounded-2xl p-7 flex flex-col border border-gold/25">
            <div className="flex items-center justify-between mb-5">
              <span className="font-syne font-semibold text-xs text-dark bg-gold px-3 py-1 rounded-full">⭐ Más completa</span>
              <span className="text-2xl">🏆</span>
            </div>
            <p className="font-syne font-bold text-xl text-white mb-1">Consultoría completa 1 hora</p>
            <p className="font-dm text-sm text-gold mb-2">
              <span className="font-syne font-bold text-3xl text-white">$120</span>
              <span className="text-sm ml-1">USD</span>
            </p>
            <p className="font-dm text-xs text-white/40 mb-5">Para founders y equipos que quieren un roadmap claro de automatización y no pueden permitirse equivocarse.</p>
            <ul className="font-dm text-sm text-white/70 flex flex-col gap-2.5 mb-8 flex-1">
              {[
                { text: 'Todo lo de la sesión de 30 min, más:', muted: true },
                { text: 'Análisis estratégico completo de tu negocio' },
                { text: 'Arquitectura técnica de tu sistema de IA' },
                { text: 'Plan de acción paso a paso (con prioridades)' },
                { text: 'Seguimiento por email por 48 horas tras la sesión' },
                { text: 'Grabación completa disponible' },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-2">
                  <span className={`mt-0.5 shrink-0 ${item.muted ? 'opacity-0' : 'text-gold'}`}>✓</span>
                  <span className={item.muted ? 'text-white/35 italic' : ''}>{item.text}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => handlePaidBook('60min')}
              disabled={loading === '60min'}
              className="btn-gold w-full py-3.5 rounded-xl text-sm disabled:opacity-60 disabled:cursor-wait"
            >
              {loading === '60min' ? 'Preparando pago...' : 'Agendar consultoría · $120 USD →'}
            </button>
            <p className="font-dm text-xs text-white/25 text-center mt-3">Pago seguro con Stripe · Elige fecha tras pagar</p>
          </div>
        </div>

        {/* Flujo explicado */}
        <div className="reveal mt-10 glass rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center gap-4 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 text-white/50 font-dm text-sm shrink-0">
            <span className="text-neon font-syne font-bold">1</span> Completa el pago
            <span className="text-white/20 hidden sm:block">→</span>
          </div>
          <div className="flex items-center gap-3 text-white/50 font-dm text-sm shrink-0">
            <span className="text-neon font-syne font-bold">2</span> Elige fecha y hora
            <span className="text-white/20 hidden sm:block">→</span>
          </div>
          <div className="flex items-center gap-3 text-white/50 font-dm text-sm">
            <span className="text-neon font-syne font-bold">3</span> Cita confirmada por email
          </div>
        </div>

        {/* Trust */}
        <div className="reveal mt-6 flex flex-wrap justify-center gap-6">
          {[
            { icon: '🔒', label: 'Pago cifrado con Stripe' },
            { icon: '📅', label: 'Elige tu horario tras el pago' },
            { icon: '🔄', label: 'Reagendar sin costo' },
            { icon: '📧', label: 'Confirmación por email' },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-2 text-white/30">
              <span>{b.icon}</span>
              <span className="font-dm text-xs">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
