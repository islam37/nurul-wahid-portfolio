import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import profileData from '../../data/profile.json'

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section-shell bg-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-gold text-xs sm:text-sm font-bold tracking-[0.22em] uppercase">Contact</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white mt-4 mb-4 text-balance">
            Get In Touch
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="grid gap-4 sm:gap-5"
          >
            <div className="glassmorphism p-5 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gold/10 rounded-lg">
                  <FaEnvelope className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Email</h4>
                  <a href={`mailto:${profileData.email}`} className="text-gold hover:text-gold-dark break-all">
                    {profileData.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="glassmorphism p-5 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gold/10 rounded-lg">
                  <FaPhone className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Phone</h4>
                  <a href={`tel:${profileData.phone}`} className="text-gold hover:text-gold-dark">
                    {profileData.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="glassmorphism p-5 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gold/10 rounded-lg">
                  <FaMapMarkerAlt className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Location</h4>
                  <p className="text-gray-light">{profileData.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            onSubmit={handleSubmit}
            className="premium-card space-y-5 sm:space-y-6 p-5 sm:p-6 lg:p-8"
          >
            <div>
              <label className="block text-white font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white/[0.055] border border-white/15 rounded-lg px-4 py-3 text-white placeholder-gray-light focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white/[0.055] border border-white/15 rounded-lg px-4 py-3 text-white placeholder-gray-light focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full bg-white/[0.055] border border-white/15 rounded-lg px-4 py-3 text-white placeholder-gray-light focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              className="premium-button w-full bg-gold text-navy shadow-lg shadow-gold/20 hover:bg-gold-dark hover:-translate-y-0.5"
            >
              {submitted ? 'Message Sent!' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
