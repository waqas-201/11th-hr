'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface ServiceItem {
  title: string
  description: string
}

const services: ServiceItem[] = [
  {
    title: 'Brand Activation',
    description:
      'We create immersive brand experiences that connect emotionally with audiences through innovative activations and strategic partnerships.',
  },
  {
    title: 'Communications Strategy',
    description:
      'Develop comprehensive communication strategies that align your brand message with your target audience and business objectives.',
  },
  {
    title: 'Brand Strategy',
    description:
      'Build strong brand foundations with our strategic approach to positioning, messaging, and market differentiation.',
  },
  {
    title: 'Creativity & Design',
    description:
      'Transform your vision into stunning visual and creative executions that captivate and engage your audience.',
  },
  {
    title: 'Data & Technology',
    description:
      'Leverage cutting-edge technology and data insights to create smart, measurable, and impactful brand experiences.',
  },
  {
    title: 'CRM & Loyalty',
    description:
      'Build lasting customer relationships through strategic CRM initiatives and loyalty programs that drive retention and growth.',
  },
]

export default function WeArePico() {
  const [openLeftIndex, setOpenLeftIndex] = useState<number | null>(null)
  const [openRightIndex, setOpenRightIndex] = useState<number | null>(null)

  const leftServices = services.slice(0, 3)
  const rightServices = services.slice(3, 6)

  return (
    <section className="bg-black text-white py-24 md:py-32 ">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12  ">

        {/* Heading - "We are" in teal, "Pico." in white, serif font */}
        <h1 className="text-center text-[42px] md:text-[64px] lg:text-[72px] font-normal tracking-tight mb-12 font-serif">
          <span className="text-[#00d4c8]">We are Pico.</span>
        </h1>

        {/* Description - lighter weight, larger, spacious line height */}
        <p className="mx-auto   text-center font-medium text-white/90 text-[20px] md:text-[28px] leading-[1.6]  mb-24 md:mb-32">
          We are a global communications and brand activation agency with offices in 36 cities,
          blending local expertise with worldwide vision. For over 50 years, we've delivered
          human authenticity in action, creating impactful brand experiences by actively
          connecting with audiences and sparking real emotions.
        </p>

        



        {/* Services - Two Independent Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24">
          {/* Left Column */}
          <div>
            {leftServices.map((service, index) => {
              const isOpen = openLeftIndex === index

              return (
                <div key={index} className="border-b border-white py-5">
                  <button
                    className="flex w-full items-center justify-between text-left group"
                    onClick={() => setOpenLeftIndex(isOpen ? null : index)}
                  >
                    <span className="text-[22px] font-normal text-white tracking-wide">
                      {service.title}
                    </span>

                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/50 text-white/60 transition-colors group-hover:border-white/80 group-hover:text-white/80">
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>

                  {/* Accordion content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-32 mt-4 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <p className="text-white/50 text-[15px] leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column */}
          <div>
            {rightServices.map((service, index) => {
              const isOpen = openRightIndex === index

              return (
                <div key={index} className="border-b border-white py-5">
                  <button
                    className="flex w-full items-center justify-between text-left group"
                    onClick={() => setOpenRightIndex(isOpen ? null : index)}
                  >
                    <span className="text-[22px] font-normal text-white tracking-wide">
                      {service.title}
                    </span>

                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/50 text-white/60 transition-colors group-hover:border-white/80 group-hover:text-white/80">
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>

                  {/* Accordion content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-32 mt-4 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <p className="text-white/60 text-[15px] leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}