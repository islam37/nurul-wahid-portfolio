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
    <section id="contact" className="py-24 bg-navy">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto" />
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="space-y-8"
          >
            <div className="glassmorphism p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gold/10 rounded-lg">
                  <FaEnvelope className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Email</h4>
                  <a href={`mailto:${profileData.email}`} className="text-gold hover:text-gold-dark">
                    {profileData.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="glassmorphism p-6">
              <div className="flex items-center gap-4 mb-4">
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

            <div className="glassmorphism p-6">
              <div className="flex items-center gap-4 mb-4">
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

          {/* Contact Form */}
          <motion.form
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block text-white font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-light focus:outline-none focus:border-gold transition-colors"
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
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-light focus:outline-none focus:border-gold transition-colors"
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
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-light focus:outline-none focus:border-gold transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              className="w-full py-3 bg-gold text-navy font-semibold rounded-full hover:bg-gold-dark transition-all"
            >
              {submitted ? 'Message Sent! ✓' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact