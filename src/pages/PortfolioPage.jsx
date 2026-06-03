import React from 'react'
import { motion } from 'framer-motion'
import AreasOfWork from '../components/sections/AreasOfWork'
import Portfolio from '../components/sections/Portfolio'
import SocialProof from '../components/sections/SocialProof'
import Gallery from '../components/sections/Gallery'

export default function PortfolioPage() {
  return (
    <motion.div
      key="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="relative z-10"
    >
      <AreasOfWork />
      <Portfolio />
      <SocialProof />
      <Gallery />
    </motion.div>
  )
}
