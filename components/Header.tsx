'use client'

import { useState } from 'react'
import { Menu, X } from 'react-feather'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 shadow-sm" style={{ backgroundColor: '#01283f' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center pl-0">
            <img 
              src="/fotos/logobr.png" 
              alt="Thalys Group" 
              className="h-20 w-auto object-contain ml-0"
              style={{ marginLeft: '-1rem' }}
            />
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#quienes-somos" className="text-white hover:text-primary font-medium transition-colors">
              Quiénes Somos
            </a>
            <a href="#servicios" className="text-white hover:text-primary font-medium transition-colors">
              Servicios
            </a>
            <a href="#soluciones" className="text-white hover:text-primary font-medium transition-colors">
              Soluciones
            </a>
            <a href="#contacto" className="text-white hover:text-primary font-medium transition-colors">
              Contacto
            </a>
          </nav>

          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden shadow-lg" style={{ backgroundColor: '#01283f' }}>
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a 
              href="#quienes-somos"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-100 hover:text-primary transition-colors"
              onClick={toggleMobileMenu}
            >
              Quiénes Somos
            </a>
            <a 
              href="#servicios"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-100 hover:text-primary transition-colors"
              onClick={toggleMobileMenu}
            >
              Servicios
            </a>
            <a 
              href="#soluciones"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-100 hover:text-primary transition-colors"
              onClick={toggleMobileMenu}
            >
              Soluciones
            </a>
            <a 
              href="#contacto"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-100 hover:text-primary transition-colors"
              onClick={toggleMobileMenu}
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </header>
  )
}