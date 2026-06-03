import React from 'react'
import { motion } from 'framer-motion'
import Advocacy from '../components/sections/Advocacy'
import Testimonials from '../components/sections/Testimonials'
import Contact from '../components/sections/Contact'

export default function ContactPage() {
  return (
    <motion.div
      key="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="relative z-10"
    >
      <Advocacy />
      <Testimonials />
      <Contact />
    </motion.div>
  )
}
