const WHATSAPP_NUMBER = '573153973371'
const WHATSAPP_MESSAGE = '¡Hola! Me interesa conocer más sobre los servicios de Elevate Zeven.'

export default function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-transform duration-200"
      style={{ boxShadow: '0 4px 24px rgba(37,211,102,0.45)' }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-8 h-8 fill-white"
      >
        <path d="M16.003 2.667C8.638 2.667 2.667 8.638 2.667 16c0 2.354.627 4.562 1.72 6.468L2.667 29.333l7.07-1.697A13.27 13.27 0 0 0 16.003 29.333C23.365 29.333 29.333 23.362 29.333 16S23.365 2.667 16.003 2.667zm0 2.4c5.977 0 10.93 4.953 10.93 10.933s-4.953 10.933-10.93 10.933a10.9 10.9 0 0 1-5.563-1.52l-.394-.237-4.196 1.007.998-3.998-.262-.411A10.9 10.9 0 0 1 5.07 16c0-5.98 4.953-10.933 10.933-10.933zm-3.17 5.6c-.215 0-.563.08-.858.4-.295.32-1.128 1.102-1.128 2.686s1.155 3.117 1.315 3.332c.16.215 2.264 3.456 5.492 4.71 2.72 1.052 3.27.843 3.858.79.587-.053 1.896-.775 2.164-1.523.268-.748.268-1.39.187-1.523-.08-.134-.294-.214-.615-.374-.32-.16-1.896-.937-2.19-1.044-.295-.107-.51-.16-.724.16-.214.32-.83 1.044-.99 1.258-.16.215-.348.24-.669.08-.32-.16-1.35-.498-2.572-1.588-.95-.849-1.59-1.896-1.777-2.217-.186-.32-.02-.494.14-.654.144-.144.32-.374.48-.561.16-.187.214-.32.32-.534.107-.214.054-.4-.027-.56-.08-.16-.724-1.746-.99-2.39-.267-.643-.534-.535-.724-.535z" />
      </svg>
    </a>
  )
}
