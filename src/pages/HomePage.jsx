
import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Statistics from '../components/sections/Statistics'
import CareerTimeline from '../components/sections/CareerTimeline'
import AreasOfWork from '../components/sections/AreasOfWork'
import Portfolio from '../components/sections/Portfolio'
import SocialProof from '../components/sections/SocialProof'
import Advocacy from '../components/sections/Advocacy'
import MediaCoverage from '../components/sections/MediaCoverage'
import Languages from '../components/sections/Languages'
import Gallery from '../components/sections/Gallery'
import Testimonials from '../components/sections/Testimonials'
import Contact from '../components/sections/Contact'

export default function HomePage() {
  return (
    <motion.div
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="relative z-10"
    >
      <Hero />
      <About />
      <Statistics />
      <CareerTimeline />
      <AreasOfWork />
      <Portfolio />
      <SocialProof />
      <Advocacy />
      <MediaCoverage />
      <Languages />
      <Gallery />
      <Testimonials />
      <Contact />
    </motion.div>
  )
}