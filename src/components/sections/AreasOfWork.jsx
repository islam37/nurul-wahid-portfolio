import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGavel, FaNewspaper, FaVideo, FaMicrophone } from 'react-icons/fa'

const AreasOfWork = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  const areas = [
    {
      icon: FaGavel,
      title: 'Investigative Reporting',
      description: 'In-depth investigations exposing corruption, human rights abuses, and systemic injustices.',
    },
    {
      icon: FaNewspaper,
      title: 'Print & Digital Media',
      description: 'Comprehensive coverage across print publications, digital platforms, and news agencies.',
    },
    {
      icon: FaVideo,
      title: 'Broadcast Journalism',
      description: 'Television and multimedia documentaries bringing stories to global audiences.',
    },
    {
      icon: FaMicrophone,
      title: 'Advocacy & Speaking',
      description: 'International conferences and public speaking on journalism ethics and human rights.',
    },
  ]

  return (
    <section id="areas" className="section-shell bg-charcoal/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-gold text-xs sm:text-sm font-bold tracking-[0.22em] uppercase">Expertise</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white mt-4 text-balance">
            Areas of Work
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mt-6 rounded-full" />
        </motion.div>

        <div ref={ref} className="grid sm:grid-cols-2 gap-5 lg:gap-6">
          {areas.map((area, index) => {
            const Icon = area.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glassmorphism p-5 sm:p-6 lg:p-8 hover:border-gold/70 transition-all"
              >
                <div className="p-4 bg-gold/10 rounded-lg w-fit mb-4">
                  <Icon className="text-gold" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>
                <p className="text-gray-light leading-relaxed">{area.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AreasOfWork
