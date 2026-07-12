import { useState, useEffect } from 'react'

export default function BookingSuccess() {
  const [show, setShow] = useState(false)
  const [plan, setPlan] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('booking') === 'confirmed') {
      setPlan(params.get('plan') || '')
      setShow(true)
      // Limpiar la URL sin recargar
      window.history.replaceState({}, '', '/')
    }
  }, [])

  if (!show) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
      <div className="glass-neon rounded-3xl p-10 max-w-md w-full text-center border border-neon/30 shadow-neon-lg">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="font-syne font-bold text-2xl text-white mb-2">¡Pago confirmado!</h2>
        <p className="font-dm text-neon font-semibold mb-4">
          {plan === '30min' ? 'Sesión de 30 minutos' : plan === '60min' ? 'Sesión de 1 hora' : 'Sesión'} reservada
        </p>
        <p className="font-dm text-sm text-white/55 leading-relaxed mb-8">
          Recibirás una confirmación por email con todos los detalles de tu sesión.
          Juan estará listo para ti en la fecha y hora que elegiste.
        </p>
        <button
          onClick={() => setShow(false)}
          className="btn-neon px-8 py-3 rounded-xl text-sm w-full"
        >
          Perfecto, nos vemos →
        </button>
      </div>
    </div>
  )
}
