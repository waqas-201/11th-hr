'use client'

import React from "react"

import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      console.log('Form submitted:', formData)
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
      onClose()
    }, 1500)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl border-white/20 bg-black p-4 sm:p-6 md:p-8">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl text-white">
            Get In Touch
          </DialogTitle>
          <DialogDescription className="text-sm md:text-base text-white/60 mt-2">
            We'd love to hear from you. Let's start a conversation.
          </DialogDescription>
        </DialogHeader>

        {/* Two column layout - responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-lg md:text-xl font-semibold text-white">
              Contact Information
            </h3>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary mt-1" />
              </div>
              <div className="min-w-0">
                <p className="text-xs md:text-sm text-white/60 mb-1">Email</p>
                <a
                  href="mailto:hello@pico.com"
                  className="text-sm md:text-base text-white hover:text-cyan-400 transition-colors break-all"
                >
                  hello@pico.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary mt-1" />
              </div>
              <div className="min-w-0">
                <p className="text-xs md:text-sm text-white/60 mb-1">Phone</p>
                <a
                  href="tel:+1234567890"
                  className="text-sm md:text-base text-white hover:text-cyan-400 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary mt-1" />
              </div>
              <div>
                <p className="text-xs md:text-sm text-white/60 mb-1">
                  Global Offices
                </p>
                <p className="text-sm md:text-base text-white">36 cities worldwide</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs md:text-sm font-medium text-white mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 text-sm md:text-base bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-primary focus:bg-white/10 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs md:text-sm font-medium text-white mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 text-sm md:text-base bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-primary focus:bg-white/10 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs md:text-sm font-medium text-white mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-3 md:px-4 py-2 text-sm md:text-base bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 md:px-6 py-2 md:py-3 text-sm md:text-base bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
