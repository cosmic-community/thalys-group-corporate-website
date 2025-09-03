import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Problems from '@/components/Problems'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Problems />
      <Contact />
      <Footer />
    </main>
  )
}