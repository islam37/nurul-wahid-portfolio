import React from 'react'
import { motion } from 'framer-motion'

const Card = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -10 } : {}}
      className={`glassmorphism p-6 hover:border-gold transition-all ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default Card