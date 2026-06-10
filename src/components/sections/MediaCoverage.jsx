import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import mediaCoverageData from '../../data/mediaCoverage.json'

const MediaCoverage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="section-shell bg-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-gold text-xs sm:text-sm font-bold tracking-[0.22em] uppercase">Featured In</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white mt-4 text-balance">
            Media Coverage
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mt-6 rounded-full" />
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-10 sm:mb-14 lg:mb-16 items-center">
          {mediaCoverageData.logos.map((logo, index) => (
            <motion.a
              key={logo.id}
              href={logo.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glassmorphism p-4 sm:p-6 flex items-center justify-center h-20 sm:h-24 hover:border-gold/70 transition-all"
            >
              <img src={logo.logo} alt={logo.name} className="max-h-10 sm:max-h-12 max-w-full grayscale hover:grayscale-0 transition-all" />
            </motion.a>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-playfair font-bold text-white mb-5">Interviews & Features</h3>
          {mediaCoverageData.interviews.map((interview, index) => (
            <motion.div
              key={interview.id}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="glassmorphism p-5 sm:p-6 hover:border-gold/70 transition-all flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4"
            >
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">{interview.title}</h4>
                <p className="text-gold text-sm">{interview.media}</p>
                <p className="text-gray-light text-sm mt-1">{interview.date}</p>
              </div>
              <a href={interview.url} className="text-gold hover:text-gold-dark transition-colors font-semibold whitespace-nowrap">
                Read
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MediaCoverage
