export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 overflow-hidden mesh-bg"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,230,100,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,230,100,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-neon/5 blur-3xl float pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-gold/5 blur-3xl float pointer-events-none" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-6xl mx-auto w-full py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* ── IZQUIERDA ── */}
          <div>
            <div className="fade-in-up inline-flex items-center gap-2 glass-neon rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
              <span className="font-dm text-xs text-neon tracking-widest uppercase">
                Agentes de IA · Automatizaciones · Bogotá → Global
              </span>
            </div>

            {/* H1 — dolor primero */}
            <h1 className="fade-in-up-1 font-syne font-extrabold text-5xl md:text-6xl leading-[1.05] tracking-tight mb-6">
              Para de hacerlo todo tú solo.{' '}
              <span className="text-neon text-glow-neon">La IA puede operar tu negocio.</span>
            </h1>

            <p className="fade-in-up-2 font-dm text-lg text-white/55 mb-3 leading-relaxed">
              Cada tarea repetitiva que haces a mano es tiempo que no vuelve.
              Construimos{' '}
              <strong style={{ fontWeight: 'inherit' }}>agentes de IA y flujos de automatización</strong>{' '}
              que hacen el trabajo operativo por ti — para que te enfoques en lo que
              solo tú puedes hacer.
            </p>

            <p className="fade-in-up-2 font-dm text-sm text-white/30 mb-10">
              Primer sistema de IA activo en{' '}
              <span className="text-neon font-semibold">7 días</span>
              {' '}— o te explicamos exactamente por qué no.
            </p>

            <div className="fade-in-up-3 flex flex-col sm:flex-row items-start gap-4 mb-6">
              <a href="#opciones" className="btn-neon px-8 py-4 rounded-xl text-base w-full sm:w-auto text-center">
                Diagnóstico de IA — gratis →
              </a>
              <a href="#servicios" className="font-syne font-semibold text-base text-white/60 hover:text-white transition-colors px-4 py-4">
                Ver cómo funciona ↓
              </a>
            </div>

            <p className="fade-in-up-3 font-dm text-xs text-white/25 mb-12">
              Sin tarjeta · Sin compromiso · Respuesta en &lt;24 h
            </p>

            {/* 3 dolores resueltos — no promesas de resultados */}
            <div className="fade-in-up-3 flex flex-col gap-3">
              {[
                { icon: '🔁', text: 'Tareas repetitivas que te consumen el día → automatizadas' },
                { icon: '🤖', text: 'Respuestas y seguimientos manuales → a cargo de la IA' },
                { icon: '📱', text: 'Horas produciendo contenido a mano → sistema automático' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-base shrink-0">{item.icon}</span>
                  <span className="font-dm text-sm text-white/50">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── DERECHA: Foto + cards ── */}
          <div className="fade-in-up-2 relative flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-neon/10 blur-2xl scale-105 pointer-events-none" />

              <div className="relative w-72 h-[360px] md:w-80 md:h-[420px] rounded-3xl overflow-hidden border border-neon/20 shadow-neon">
                <img
                  src="/juan.jpg"
                  alt="Juan Millán — Founder de Elevate Zeven, agencia de automatización con IA en Bogotá"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />
              </div>

              {/* Card: nombre */}
              <div className="absolute -bottom-5 -left-8 glass-neon rounded-2xl px-4 py-3 border border-neon/30 shadow-neon">
                <p className="font-syne font-bold text-white text-sm">Juan Millán</p>
                <p className="font-dm text-xs text-neon">Founder · Elevate Zeven</p>
              </div>

              {/* Card: dolor resuelto */}
              <div className="absolute -top-5 -right-8 glass rounded-2xl px-4 py-3 border border-white/10">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">🤖</span>
                  <div>
                    <p className="font-syne font-bold text-neon text-sm leading-tight">Sin trabajo manual</p>
                    <p className="font-dm text-xs text-white/50 mt-0.5">la IA lo hace por ti</p>
                  </div>
                </div>
              </div>

              {/* Card: disponibilidad */}
              <div className="absolute top-1/3 -left-10 glass rounded-xl px-3 py-2.5 border border-white/10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neon animate-pulse shrink-0" />
                <span className="font-dm text-xs text-white/70">Tu IA trabaja 24/7</span>
              </div>

              {/* Card: tiempo */}
              <div className="absolute bottom-1/4 -right-10 glass rounded-xl px-3 py-2.5 border border-gold/20 flex items-center gap-2">
                <span className="text-base">⚡</span>
                <span className="font-dm text-xs text-gold">Activo en 7 días</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30">
        <span className="font-dm text-xs text-white/40 tracking-widest uppercase">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-neon to-transparent" />
      </div>
    </section>
  )
}
