import { useEffect, useRef } from 'react'

const products = [
  {
    icon: '📓',
    name: 'Elite Trading Journal',
    category: 'SaaS · Traders',
    description:
      'Diario de trading con IA integrada. Registro psicológico pre/durante/post operación, mentor de IA, calculadora de tamaño de posición, soporte multi-cuenta y sincronización con MT5.',
    tags: ['React', 'Supabase', 'Claude API', 'MT5'],
    color: 'gold',
    status: 'En vivo',
  },
  {
    icon: '📈',
    name: 'Copy Trade Master',
    category: 'Plataforma · Forex CFD',
    description:
      'Plataforma de copy trading en Forex y CFD. Perfiles de traders destacados, seguimiento automático de operaciones y panel de rendimiento en tiempo real.',
    tags: ['React', 'n8n', 'MT5'],
    color: 'neon',
    status: 'En desarrollo',
  },
  {
    icon: '🏠',
    name: 'PropVision',
    category: 'SaaS · Inmobiliario',
    description:
      'Herramienta de análisis inmobiliario con IA. Carga fotos o URL de propiedades y obtén un análisis detallado del espacio, proyecciones de valor y recomendaciones de mejora.',
    tags: ['React', 'Claude API', 'Vite'],
    color: 'white',
    status: 'Prototipo',
  },
  {
    icon: '🔮',
    name: 'The Golden Frequency',
    category: 'Web3 · NFT · Blockchain',
    description:
      'Colección de NFTs y activos digitales en blockchain para The Golden Frequency. Contratos inteligentes, tokenización de experiencias y comunidad Web3 construida sobre Ethereum.',
    tags: ['Solidity', 'ERC-721', 'Ethereum', 'Web3.js'],
    color: 'gold',
    status: 'En desarrollo',
  },
  {
    icon: '🧠',
    name: 'Psicotrader',
    category: 'Marca personal · Contenido',
    description:
      'Canal de psicología del trading en Instagram y TikTok. Contenido sobre finanzas conductuales, dominio emocional y rendimiento del trader, producido con IA y clonación de voz.',
    tags: ['ElevenLabs', 'Claude API', 'Remotion'],
    color: 'white',
    status: 'Activo',
  },
]

const statusColor = {
  'En vivo': 'text-neon bg-neon/10 border-neon/20',
  'En desarrollo': 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  'Prototipo': 'text-white/40 bg-white/5 border-white/10',
  'Activo': 'text-neon bg-neon/10 border-neon/20',
}

export default function Products() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    )
    const els = sectionRef.current?.querySelectorAll('.reveal')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="proyectos" ref={sectionRef} className="py-28 px-6 relative">
      <div className="divider-neon mb-20" />

      <div className="max-w-6xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="font-dm text-xs text-neon tracking-widest uppercase mb-3">Productos SaaS & proyectos con IA</p>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-white mb-4">
            Lo que hemos{' '}
            <span className="text-neon">construido</span>
          </h2>
          <p className="font-dm text-white/50 max-w-xl mx-auto leading-relaxed">
            Cada proyecto es prueba de nuestra capacidad técnica y de producto.
            No solo asesoramos — construimos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {products.map((p, i) => (
            <div
              key={p.name}
              className={`reveal service-card glass rounded-2xl p-7 ${
                p.color === 'gold' ? 'glass-gold' : p.color === 'neon' ? 'glass-neon' : ''
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{p.icon}</span>
                  <div>
                    <h3 className="font-syne font-bold text-lg text-white leading-tight">{p.name}</h3>
                    <p className={`font-dm text-xs mt-0.5 ${
                      p.color === 'gold' ? 'text-gold' : p.color === 'neon' ? 'text-neon' : 'text-white/40'
                    }`}>
                      {p.category}
                    </p>
                  </div>
                </div>
                <span className={`shrink-0 font-dm text-xs px-2.5 py-1 rounded-full border ${statusColor[p.status]}`}>
                  {p.status}
                </span>
              </div>

              <p className="font-dm text-sm text-white/55 leading-relaxed mb-5">{p.description}</p>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span key={tag} className="font-dm text-xs text-white/40 glass px-2.5 py-1 rounded-full border border-white/8">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
