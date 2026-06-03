import React from 'react'
import { motion } from 'framer-motion'
import About from '../components/sections/About'
import Statistics from '../components/sections/Statistics'
import CareerTimeline from '../components/sections/CareerTimeline'
import Languages from '../components/sections/Languages'
import MediaCoverage from '../components/sections/MediaCoverage'

export default function AboutPage() {
  return (
    <motion.div
      key="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="relative z-10"
    >
      <About />
      <Statistics />
      <CareerTimeline />
      <Languages />
      <MediaCoverage />
    </motion.div>
  )
}
