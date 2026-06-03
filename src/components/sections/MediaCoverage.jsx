import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import mediaCoverageData from '../../data/mediaCoverage.json'

const MediaCoverage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="py-24 bg-navy">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-inter tracking-wider uppercase">Featured In</span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mt-4">
            Media Coverage
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mt-6" />
        </motion.div>

        {/* Logos */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 items-center">
          {mediaCoverageData.logos.map((logo, index) => (
            <motion.a
              key={logo.id}
              href={logo.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="glassmorphism p-6 flex items-center justify-center h-24 hover:border-gold transition-all"
            >
              <img src={logo.logo} alt={logo.name} className="max-h-12 max-w-full grayscale hover:grayscale-0 transition-all" />
            </motion.a>
          ))}
        </div>

        {/* Interviews */}
        <div className="space-y-4">
          <h3 className="text-2xl font-playfair font-bold text-white mb-6">Interviews & Features</h3>
          {mediaCoverageData.interviews.map((interview, index) => (
            <motion.div
              key={interview.id}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="glassmorphism p-6 hover:border-gold transition-all flex justify-between items-center md:items-start"
            >
              <div>
                <h4 className="text-lg font-bold text-white mb-2">{interview.title}</h4>
                <p className="text-gold text-sm">{interview.media}</p>
                <p className="text-gray-light text-sm mt-1">{interview.date}</p>
              </div>
              <a href={interview.url} className="text-gold hover:text-gold-dark transition-colors font-semibold whitespace-nowrap ml-4">
                Read →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MediaCoverage