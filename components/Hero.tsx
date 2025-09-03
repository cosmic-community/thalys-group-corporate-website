export default function Hero() {
  return (
    <section id="inicio" className="relative pt-20 pb-0 overflow-hidden min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="/fotos/hero-fondo.jpeg" 
          alt="Fondo" 
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center bottom' }}
          loading="eager"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10 h-full">
        <div className="grid md:grid-cols-2 gap-12 items-end h-full">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              Transformamos <span className="text-gradient">desafíos</span> en oportunidades comerciales
            </h1>

            <p className="text-xl text-gray-100 max-w-lg">
              Metodologías probadas que han impulsado <span className="font-semibold">+200% en ventas</span> para empresas en menos de 6 meses.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:-translate-y-1 shadow-lg"
              >
                Agendar reunión
              </a>
              <a
                href="#servicios"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-all"
              >
                Nuestros servicios
              </a>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <img 
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://randomuser.me/api/portraits/women/12.jpg" 
                    alt="Cliente satisfecho"
                  />
                  <img 
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Cliente satisfecho"
                  />
                  <img 
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://randomuser.me/api/portraits/women/45.jpg" 
                    alt="Cliente satisfecho"
                  />
                </div>
                <span className="ml-3 text-sm text-white font-medium">
                  +50 empresas transformadas
                </span>
              </div>
            </div>
          </div>
          
          <div className="fade-in-right delay-200 relative h-full">
            <img 
              src="/fotos/hero-person.png" 
              alt="Thalys Group Team"
              className="hero-person w-full h-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}