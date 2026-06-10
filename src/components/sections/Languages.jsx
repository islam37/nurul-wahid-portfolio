import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Languages = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  const languages = [
    { name: 'Bengali', level: 'Native', proficiency: 100 },
    { name: 'English', level: 'Fluent', proficiency: 95 },
    { name: 'Hindi', level: 'Fluent', proficiency: 90 },
    { name: 'Spanish', level: 'Professional', proficiency: 80 },
    { name: 'Arabic', level: 'Intermediate', proficiency: 70 },
    { name: 'French', level: 'Basic', proficiency: 60 },
  ]

  return (
    <section id="languages" className="section-shell bg-charcoal/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-gold text-xs sm:text-sm font-bold tracking-[0.22em] uppercase">Communication</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white mt-4 text-balance">
            Languages
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mt-6 rounded-full" />
        </motion.div>

        <div ref={ref} className="grid sm:grid-cols-2 gap-5">
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="premium-card p-5"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold text-white">{lang.name}</h3>
                <span className="text-gold text-sm font-semibold">{lang.level}</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${lang.proficiency}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full bg-gradient-to-r from-gold to-gold-dark"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Languages
