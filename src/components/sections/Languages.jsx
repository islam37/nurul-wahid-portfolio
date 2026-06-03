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
    <section id="languages" className="py-24 bg-charcoal/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-inter tracking-wider uppercase">Communication</span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mt-4">
            Languages
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mt-6" />
        </motion.div>

        <div ref={ref} className="space-y-8">
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 }}
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