import React from 'react'
import { motion } from 'framer-motion'

const SectionHeader = ({ tag, title, subtitle = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-10 sm:mb-14 lg:mb-16"
    >
      {tag && <span className="text-gold text-xs sm:text-sm font-bold tracking-[0.22em] uppercase">{tag}</span>}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white mt-4 mb-4 sm:mb-6 text-balance">
        {title}
      </h2>
      {subtitle && <p className="text-gray-light text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">{subtitle}</p>}
      <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mt-5 sm:mt-6 rounded-full" />
    </motion.div>
  )
}

export default SectionHeader
