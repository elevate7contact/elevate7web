import { useEffect, useRef, useState } from 'react'

const faqs = [
  {
    q: '¿Cómo sé si la IA realmente puede ayudar a mi negocio?',
    a: 'Si en tu operación hay tareas que se repiten, procesos que dependen de que una persona esté disponible, o trabajo manual que consume horas sin agregar valor real — la IA puede resolverlo. En el diagnóstico gratuito te decimos exactamente cuáles y cómo.',
  },
  {
    q: '¿Qué herramientas de IA usan?',
    a: 'Usamos las más sólidas del mercado según el problema: n8n y Make para automatizaciones; Claude API y GPT-4 para agentes de IA; ElevenLabs para voz; HeyGen para video. No usamos lo que está de moda — usamos lo que resuelve el dolor específico de tu negocio.',
  },
  {
    q: '¿Necesito saber de tecnología para trabajar con ustedes?',
    a: 'No. Tú describes el problema — nosotros construimos la solución. Te entregamos sistemas que funcionan solos sin que necesites entender el código ni la tecnología detrás. Si algo falla, lo arreglamos nosotros.',
  },
  {
    q: '¿Cuánto cuesta implementar IA en mi negocio?',
    a: 'El diagnóstico es completamente gratis. Si decidimos trabajar juntos, construimos una propuesta según el problema concreto que quieres resolver. Sin paquetes genéricos, sin precios escondidos — el primer número que escuchas es el número real.',
  },
  {
    q: '¿En qué problemas se especializan?',
    a: 'En tres dolores principales: operaciones que dependen de trabajo manual repetitivo, producción de contenido que consume demasiado tiempo, y procesos de atención o seguimiento que se pierden por falta de capacidad humana. Si tu problema entra en alguno de esos — podemos resolverlo.',
  },
  {
    q: '¿Y si implementan algo que luego no funciona o nadie mantiene?',
    a: 'Es uno de los dolores más comunes con la IA: se implementa, nadie la mantiene y deja de funcionar. Por eso ofrecemos retainer mensual donde somos el equipo permanente que mantiene, ajusta y mejora tu infraestructura de IA mes a mes.',
  },
]

export default function FAQ() {
  const sectionRef = useRef(null)
  const [open, setOpen] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="faq" ref={sectionRef} className="py-28 px-6 relative">
      <div className="divider-neon mb-20" />

      <div className="max-w-3xl mx-auto">
        <div className="reveal text-center mb-14">
          <p className="font-dm text-xs text-neon tracking-widest uppercase mb-3">FAQ · Automatización con IA para negocios</p>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-white mb-4">
            Preguntas frecuentes sobre{' '}
            <span className="text-neon">automatización con IA</span>
          </h2>
          <p className="font-dm text-white/50 max-w-md mx-auto leading-relaxed">
            Las dudas más comunes antes de implementar IA en un negocio. Si la tuya no está aquí, escríbenos.
          </p>
        </div>

        <div className="reveal flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              role="button"
              tabIndex={0}
              aria-expanded={open === i}
              className={`glass rounded-2xl border transition-colors cursor-pointer ${
                open === i ? 'border-neon/30 bg-neon/5' : 'border-white/6 hover:border-white/12'
              }`}
              onClick={() => setOpen(open === i ? null : i)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setOpen(open === i ? null : i)}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="flex items-start justify-between gap-4 px-6 py-5">
                <p className={`font-syne font-semibold text-base transition-colors ${open === i ? 'text-neon' : 'text-white'}`}>
                  {faq.q}
                </p>
                <span className={`shrink-0 text-lg font-syne font-bold transition-transform ${
                  open === i ? 'text-neon rotate-45' : 'text-white/30'
                }`} style={{ display: 'inline-block' }}>
                  +
                </span>
              </div>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="font-dm text-sm text-white/60 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="reveal mt-10 text-center">
          <p className="font-dm text-sm text-white/40 mb-4">¿Tienes otro problema que no encuentras aquí?</p>
          <a href="mailto:elevate7contact@gmail.com" className="font-syne font-semibold text-sm text-neon hover:text-neon/80 transition-colors">
            Cuéntanos → elevate7contact@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}
