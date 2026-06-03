import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import profileData from '../../data/profile.json'
import { FaAward, FaGlobeAmericas, FaHeart } from 'react-icons/fa'

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  const highlights = [
    { icon: FaAward, label: '25+ Years Experience', value: 'Award-winning journalist' },
    { icon: FaGlobeAmericas, label: 'Global Reach', value: '45+ countries covered' },
    { icon: FaHeart, label: 'Mission-Driven', value: 'Human rights advocate' },
  ]

  return (
    <section id="about" className="py-24 bg-navy">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              About Me
            </h2>
            <p className="text-gray-light text-lg leading-relaxed mb-6">
              {profileData.bio}
            </p>
            <p className="text-gray-light text-lg leading-relaxed mb-8">
              {profileData.mission}
            </p>
            <a href="#contact" className="inline-block px-8 py-3 bg-gold text-navy font-semibold rounded-full hover:bg-gold-dark transition-all transform hover:scale-105">
              Get In Touch
            </a>
          </motion.div>

          {/* Right Highlights */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="glassmorphism p-6 hover:border-gold transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gold/10 rounded-lg flex-shrink-0">
                      <Icon className="text-gold" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{item.label}</h3>
                      <p className="text-gray-light">{item.value}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About