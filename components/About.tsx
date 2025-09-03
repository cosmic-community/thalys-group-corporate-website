'use client'

import { useState } from 'react'
import { Check, Clock, FileText, BarChart3, Users, Target, Zap } from 'react-feather'

const tabs = [
  { id: 0, label: 'Acerca de nosotros' },
  { id: 1, label: 'Misión' },
  { id: 2, label: 'Visión' }
]

export default function About() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="quienes-somos" className="py-20" style={{ backgroundColor: '#000d1a' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="fade-in-up text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-custom mb-4 sm:mb-6">
            Conoce a <span className="text-accent">Thalys Group</span>
          </h2>
          <p className="fade-in-up delay-100 text-lg sm:text-xl text-text-custom max-w-3xl mx-auto">
            Estrategia que se mueve al ritmo de tu negocio
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-1 bg-gray-800 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-custom text-white'
                    : 'text-text-custom hover:opacity-75'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="w-full">
          {/* About Us Tab */}
          {activeTab === 0 && (
            <div className="flex flex-col lg:flex-row items-center pt-8 lg:pt-12 gap-8 lg:gap-12">
              <div className="w-full lg:w-2/5 flex justify-center">
                <div className="relative w-full max-w-[600px] h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/personas.png" 
                    alt="Nuestro equipo en Thalys Group"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-xl font-bold">Nuestro Equipo</h3>
                    <p className="text-cyan-200 text-sm">Profesionales con experiencia</p>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-3/5">
                <div className="max-w-[640px] lg:ml-auto">
                  <h2 className="mb-6 text-2xl font-bold sm:text-[40px] sm:leading-[50px] text-white">
                    Thalys Group: Estrategia que se mueve al ritmo de tu negocio
                  </h2>
                  <p className="text-base leading-relaxed mb-6 text-text-custom">
                    Desde 2020 desafiamos la consultoría tradicional con un enfoque simple: diagnóstico claro, plan ejecutable y seguimiento real. Menos teoría, más resultados.
                  </p>

                  <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-6">
                    <li className="flex items-center gap-2 text-sm text-text-custom">
                      <Check className="w-4 h-4 flex-shrink-0 text-accent" />
                      <span>Estrategias a medida</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-text-custom">
                      <Check className="w-4 h-4 flex-shrink-0 text-accent" />
                      <span>De datos a acción</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-text-custom">
                      <Check className="w-4 h-4 flex-shrink-0 text-accent" />
                      <span>Resultados en 90 días</span>
                    </li>
                  </ul>

                  <div className="mt-8 p-6 bg-slate-800 rounded-xl border border-cyan-500/20">
                    <p className="text-gray-300 italic text-lg">
                      "En Thalys, medimos nuestro éxito por el ROI de nuestros clientes, no por la cantidad de slides que entregamos."
                    </p>
                    <p className="mt-4 text-white font-semibold">– Fundador, CEO</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mission Tab */}
          {activeTab === 1 && (
            <div className="flex flex-col-reverse lg:flex-row items-center pt-8 lg:pt-12 gap-8 lg:gap-12">
              <div className="w-full lg:w-3/5">
                <div className="max-w-[565px]">
                  <h2 className="text-2xl font-bold sm:text-[40px] sm:leading-[50px] text-white mb-8">
                    MISIÓN
                  </h2>
                  <div className="space-y-6">
                    <blockquote className="text-xl italic border-l-4 border-cyan-500 pl-6 py-2 bg-slate-800/30 rounded-r-lg text-text-custom">
                      "Transformar desafíos comerciales en resultados medibles mediante estrategias ágiles y ejecución impecable. Trabajamos codo a codo contigo para priorizar acciones concretas —no teorías— que impulsen ventas, fidelicen clientes y escalen tu negocio en el menor tiempo posible."
                    </blockquote>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                      <div className="bg-slate-800/50 p-6 rounded-xl text-center hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-1">
                        <div className="bg-blue-custom rounded-full p-3 w-16 h-16 mx-auto flex items-center justify-center mb-4">
                          <Clock className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-white">72 HORAS</h3>
                        <p className="text-cyan-200">Diagnóstico rápido</p>
                      </div>
                      
                      <div className="bg-slate-800/50 p-6 rounded-xl text-center hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-1">
                        <div className="bg-blue-custom rounded-full p-3 w-16 h-16 mx-auto flex items-center justify-center mb-4">
                          <FileText className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-white">15 DÍAS</h3>
                        <p className="text-cyan-200">Hoja de ruta</p>
                      </div>
                      
                      <div className="bg-slate-800/50 p-6 rounded-xl text-center hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-1">
                        <div className="bg-blue-custom rounded-full p-3 w-16 h-16 mx-auto flex items-center justify-center mb-4">
                          <BarChart3 className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-white">90 DÍAS</h3>
                        <p className="text-cyan-200">Resultados reales</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-2/5 flex justify-center">
                <div className="relative w-full max-w-[400px] h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/fotos/acerca-de-7.jpeg" 
                    alt="Nuestro enfoque en la misión"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-xl font-bold">Nuestra Metodología</h3>
                    <p className="text-cyan-200 text-sm">Estrategias ágiles y ejecución impecable</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Vision Tab */}
          {activeTab === 2 && (
            <div className="flex flex-col lg:flex-row items-center pt-8 lg:pt-12 gap-8 lg:gap-12">
              <div className="w-full lg:w-2/5 flex justify-center">
                <div className="relative w-full max-w-[400px] h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/fotos/acerca-de-8.jpeg" 
                    alt="Nuestra visión"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-xl font-bold">Nuestro Futuro</h3>
                    <p className="text-cyan-200 text-sm">Visión hacia 2030</p>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-3/5">
                <div className="max-w-[565px] lg:ml-auto">
                  <h2 className="text-2xl font-bold sm:text-[40px] sm:leading-[50px] text-white mb-8">
                    VISIÓN
                  </h2>
                  <div className="space-y-6">
                    <blockquote className="text-xl italic border-l-4 border-cyan-500 pl-6 py-2 bg-slate-800/30 rounded-r-lg text-text-custom">
                      "Ser el partner estratégico de referencia para empresas que rechazan lo tradicional y exigen resultados reales. Imaginamos un mercado latinoamericano donde la estrategia comercial no se limite a documentos, sino que se mida en ventas incrementadas, costos reducidos y equipos empoderados para seguir innovando sin dependencia externa."
                    </blockquote>
                    
                    <div className="mt-8">
                      <h3 className="font-bold text-lg mb-6 text-white">Nuestro norte en 2030:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-slate-800/50 p-5 rounded-xl text-center border-t-2 border-cyan-500">
                          <div className="bg-blue-custom rounded-full p-3 w-14 h-14 mx-auto flex items-center justify-center mb-3">
                            <Users className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="font-semibold text-white">500+</h4>
                          <p className="text-cyan-200 text-sm">empresas transformadas</p>
                        </div>
                        
                        <div className="bg-slate-800/50 p-5 rounded-xl text-center border-t-2 border-cyan-500">
                          <div className="bg-blue-custom rounded-full p-3 w-14 h-14 mx-auto flex items-center justify-center mb-3">
                            <Target className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="font-semibold text-white">0</h4>
                          <p className="text-cyan-200 text-sm">proyectos sin métricas</p>
                        </div>
                        
                        <div className="bg-slate-800/50 p-5 rounded-xl text-center border-t-2 border-cyan-500">
                          <div className="bg-blue-custom rounded-full p-3 w-14 h-14 mx-auto flex items-center justify-center mb-3">
                            <Zap className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="font-semibold text-white">Reinventar</h4>
                          <p className="text-cyan-200 text-sm">la consultoría</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 p-6 bg-slate-800 rounded-xl border border-cyan-500/20">
                      <p className="text-gray-300 italic">
                        "Construyendo un ecosistema comercial donde la velocidad, la transparencia y la ejecución sin excusas sean el estándar, no la excepción."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}