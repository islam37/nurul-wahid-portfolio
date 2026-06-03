import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AnimatedCounter from '../ui/AnimatedCounter'
import statisticsData from '../../data/statistics.json'

const Statistics = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="py-24 bg-gradient-to-r from-navy to-charcoal">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            By The Numbers
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {statisticsData.stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-gold text-sm uppercase tracking-wider font-semibold mb-2">
                {stat.label}
              </div>
              <div className="text-5xl md:text-6xl font-bold text-white">
                {inView && <AnimatedCounter end={stat.value} duration={2} />}
                <span className="text-3xl text-gold">{stat.suffix}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics