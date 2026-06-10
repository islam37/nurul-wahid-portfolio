import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AnimatedCounter from '../ui/AnimatedCounter'
import statisticsData from '../../data/statistics.json'

const Statistics = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="section-shell bg-[linear-gradient(120deg,#08111f,#111827_58%,#0f2428)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-gold text-xs sm:text-sm font-bold tracking-[0.22em] uppercase">Impact</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white mt-4 mb-4 text-balance">
            By The Numbers
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
          {statisticsData.stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="premium-card text-center p-4 sm:p-5"
            >
              <div className="text-gold text-[11px] sm:text-xs uppercase tracking-wider font-semibold mb-2 min-h-8 flex items-center justify-center">
                {stat.label}
              </div>
              <div className="text-3xl sm:text-4xl xl:text-5xl font-bold text-white">
                {inView && <AnimatedCounter end={stat.value} duration={2} />}
                <span className="text-xl sm:text-2xl text-gold">{stat.suffix}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics
