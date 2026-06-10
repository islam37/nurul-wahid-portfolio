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
    <section id="about" className="section-shell bg-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold text-xs sm:text-sm font-bold tracking-[0.22em] uppercase">Profile</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white mt-4 mb-5 text-balance">
              About Me
            </h2>
            <p className="text-gray-light text-base sm:text-lg leading-relaxed mb-5">
              {profileData.bio}
            </p>
            <p className="text-gray-light text-base sm:text-lg leading-relaxed mb-8">
              {profileData.mission}
            </p>
            <a href="#contact" className="premium-button bg-gold text-navy shadow-lg shadow-gold/20 hover:bg-gold-dark hover:-translate-y-0.5">
              Get In Touch
            </a>
          </motion.div>

          {/* Right Highlights */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-4 sm:gap-5"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="glassmorphism p-5 sm:p-6 hover:border-gold/70 transition-all"
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
