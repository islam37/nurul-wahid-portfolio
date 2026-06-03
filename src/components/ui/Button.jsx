import React from 'react'
import { motion } from 'framer-motion'

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const variants = {
    primary: 'bg-gold text-navy hover:bg-gold-dark',
    secondary: 'bg-transparent border border-gold text-gold hover:bg-gold/10',
    ghost: 'text-gold hover:bg-gold/10',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  )
}

export default Button