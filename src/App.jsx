import Navbar from './components/Navbar'
import WhatsAppButton from './components/WhatsAppButton'
import BookingSuccess from './components/BookingSuccess'
import Hero from './components/Hero'
import PainSection from './components/PainSection'
import Services from './components/Services'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Booking from './components/Booking'
import FAQ from './components/FAQ'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <BookingSuccess />
      <Navbar />
      <main>
        <Hero />
        <About />
        <PainSection />
        <Services />
        <Process />
        <Testimonials />
        <Booking />
        <FAQ />
        <Products />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
