export default function Services() {
  const services = [
    {
      title: 'Fractional Commercial Engine',
      description: 'Dirección comercial a tiempo parcial con ejecución completa. Expertos dedicados que actúan como tu VP de Ventas sin contrato indefinido.',
      image: '/fotos/feature-1.png',
    },
    {
      title: 'Consultoría Estratégica & Operativa',
      description: 'Diagnóstico preciso y ejecución de estrategias comerciales adaptadas a tu realidad. Desde planificación hasta implementación completa.',
      image: '/fotos/feature-2.png',
    },
    {
      title: 'Transformación Digital Aplicada',
      description: 'Implementación de herramientas digitales que potencian tus procesos comerciales. Tecnología al servicio de resultados tangibles.',
      image: '/fotos/feature-3.jpeg',
    },
  ]

  return (
    <section id="servicios" className="py-12" style={{ backgroundColor: '#000d1a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="fade-in-up text-3xl sm:text-4xl font-bold mb-4 sm:mb-4 text-text-custom">
            Nuestros Servicios
          </h2>
          <p className="fade-in-up delay-100 text-lg sm:text-xl text-text-custom max-w-3xl mx-auto mt-4">
            Soluciones especializadas para acelerar tu crecimiento comercial
          </p>
        </div>

        <div className="sequential-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="fade-in-up feature-card bg-gray-800 p-6 sm:p-8 rounded-xl text-center shadow-lg border border-accent transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6 flex justify-center">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-text-custom">
                {service.title}
              </h3>
              <p className="text-text-custom text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}