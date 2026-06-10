import React from 'react'
import { motion } from 'framer-motion'

const Card = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -6 } : {}}
      className={`glassmorphism p-5 sm:p-6 hover:border-gold/70 transition-all ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default Card
