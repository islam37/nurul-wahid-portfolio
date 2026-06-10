import React from 'react'
import { motion } from 'framer-motion'

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const variants = {
    primary: 'bg-gold text-navy shadow-lg shadow-gold/20 hover:bg-gold-dark hover:-translate-y-0.5',
    secondary: 'bg-white/[0.03] border border-gold/70 text-gold hover:bg-gold/10 hover:border-gold',
    ghost: 'text-gold hover:bg-gold/10',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`premium-button ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  )
}

export default Button
