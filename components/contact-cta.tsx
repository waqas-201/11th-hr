'use client'

import { useState } from 'react'
import { ContactModal } from './contact-modal'

export function ContactCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const mapImageUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/world-map-16mFMcDb6MihtQ9Mchx2lHeJaatoyU.webp'

  return (
    <>
      <section
        className="relative min-h-screen flex items-center justify-center px-4 py-24 md:px-8 overflow-hidden"
        style={{ backgroundColor: '#000000' }}
      >
        {/* Background map image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-95"
          style={{
            backgroundImage: `url(${mapImageUrl})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />

        {/* Subtle gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-tight">
            Ready to bring your next idea to life?
          </h2>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-block px-10 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Contact Us
          </button>
        </div>

        {/* Bottom shadow effect for section separation */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-black/30 to-black pointer-events-none" />
      </section>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
