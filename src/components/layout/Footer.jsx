import React from 'react'
import { motion } from 'framer-motion'
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'
import profileData from '../../data/profile.json'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = ['Home', 'About', 'Portfolio', 'Contact']
  const socials = [
    { icon: FaFacebook, url: profileData.socialLinks.facebook },
    { icon: FaTwitter, url: profileData.socialLinks.twitter },
    { icon: FaLinkedin, url: profileData.socialLinks.linkedin },
    { icon: FaYoutube, url: '#' },
  ]

  return (
    <footer className="bg-charcoal border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h3 className="text-2xl font-playfair font-bold text-white mb-4">Nurul Wahid</h3>
            <p className="text-gray-light text-sm leading-relaxed">
              Award-winning journalist dedicated to truth-seeking and amplifying marginalized voices.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-light hover:text-gold transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`mailto:${profileData.email}`} className="text-gray-light hover:text-gold transition-colors">
                  {profileData.email}
                </a>
              </li>
              <li>
                <a href={`tel:${profileData.phone}`} className="text-gray-light hover:text-gold transition-colors">
                  {profileData.phone}
                </a>
              </li>
              <li className="text-gray-light">{profileData.location}</li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h4 className="text-white font-bold mb-6">Follow</h4>
            <div className="flex gap-4">
              {socials.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.2 }}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-colors"
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex justify-between items-center">
          <p className="text-gray-light text-sm">
            &copy; {currentYear} Nurul Wahid. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-light">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer