import { useState, useEffect, useRef } from 'react'
import { supabase } from '../lib/supabase'

const services = [
  'AI Audit (Gratis)',
  'Automatización de Marketing',
  'Contenido & Clonación con IA',
  'Marketing para SaaS',
  'Servicios Managed IA',
  'Otro',
]

const initialForm = {
  name: '',
  email: '',
  company: '',
  service: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    const els = sectionRef.current?.querySelectorAll('.reveal')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const { error } = await supabase.from('leads').insert([
      {
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        company: form.company.trim() || null,
        service: form.service || null,
        message: form.message.trim() || null,
      },
    ])

    if (error) {
      console.error(error)
      setErrorMsg('Algo salió mal. Intenta de nuevo o escríbenos directamente.')
      setStatus('error')
    } else {
      setStatus('success')
      setForm(initialForm)
    }
  }

  return (
    <section id="contacto" ref={sectionRef} className="py-28 px-6 relative">
      <div className="divider-neon mb-20" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-14">
          <p className="font-dm text-xs text-neon tracking-widest uppercase mb-3">Contacto</p>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-white mb-4">
            ¿Listo para construir tu infraestructura de IA?
          </h2>
          <p className="font-dm text-white/50 max-w-xl mx-auto">
            Cuéntanos qué procesos quieres automatizar. Te respondemos en menos de 24 horas con un plan de acción.
          </p>
        </div>

        <div className="reveal glass rounded-3xl p-8 md:p-12">
          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="font-syne font-bold text-2xl text-white mb-2">¡Mensaje recibido!</h3>
              <p className="font-dm text-white/55 mb-8">
                Te contactamos en menos de 24 horas. Mientras tanto, puedes agendar tu
                auditoría gratuita.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#agendar" className="btn-neon px-6 py-3 rounded-xl text-sm">
                  Agendar Auditoría →
                </a>
                <button
                  onClick={() => setStatus('idle')}
                  className="font-syne font-600 text-sm text-white/50 hover:text-white transition-colors px-6 py-3"
                >
                  Enviar otro mensaje
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="font-dm text-xs text-white/40 uppercase tracking-widest">
                  Nombre *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Juan García"
                  className="glass rounded-xl px-4 py-3 font-dm text-sm text-white placeholder-white/20 outline-none focus:border-neon/40 transition-colors border border-transparent"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="font-dm text-xs text-white/40 uppercase tracking-widest">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  maxLength={254}
                  value={form.email}
                  onChange={handleChange}
                  placeholder="juan@empresa.com"
                  className="glass rounded-xl px-4 py-3 font-dm text-sm text-white placeholder-white/20 outline-none focus:border-neon/40 transition-colors border border-transparent"
                />
              </div>

              {/* Company */}
              <div className="flex flex-col gap-2">
                <label className="font-dm text-xs text-white/40 uppercase tracking-widest">
                  Empresa / Proyecto
                </label>
                <input
                  type="text"
                  name="company"
                  maxLength={100}
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Mi SaaS"
                  className="glass rounded-xl px-4 py-3 font-dm text-sm text-white placeholder-white/20 outline-none focus:border-neon/40 transition-colors border border-transparent"
                />
              </div>

              {/* Service */}
              <div className="flex flex-col gap-2">
                <label className="font-dm text-xs text-white/40 uppercase tracking-widest">
                  Servicio de interés
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="glass rounded-xl px-4 py-3 font-dm text-sm text-white/80 outline-none focus:border-neon/40 transition-colors border border-transparent bg-transparent appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#0a0a0a]">Seleccionar...</option>
                  {services.map((s) => (
                    <option key={s} value={s} className="bg-[#0a0a0a]">{s}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-dm text-xs text-white/40 uppercase tracking-widest">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  maxLength={2000}
                  rows={4}
                  placeholder="Cuéntanos qué necesitas o qué problema quieres resolver..."
                  className="glass rounded-xl px-4 py-3 font-dm text-sm text-white placeholder-white/20 outline-none focus:border-neon/40 transition-colors border border-transparent resize-none"
                />
              </div>

              {/* Error */}
              {status === 'error' && (
                <div className="md:col-span-2 glass rounded-xl px-4 py-3 border border-red-500/20">
                  <p className="font-dm text-sm text-red-400">{errorMsg}</p>
                </div>
              )}

              {/* Submit */}
              <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-neon px-8 py-3.5 rounded-xl text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Enviando...' : 'Enviar mensaje →'}
                </button>
                <p className="font-dm text-xs text-white/30">
                  O escríbenos directamente a{' '}
                  <a href="mailto:elevate7contact@gmail.com" className="text-neon hover:text-neon/80">
                    elevate7contact@gmail.com
                  </a>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
