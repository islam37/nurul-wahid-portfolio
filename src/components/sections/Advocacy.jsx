import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaHandHoldingHeart, FaGlobeAmericas, FaUsers, FaBook } from 'react-icons/fa'

const Advocacy = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  const initiatives = [
    {
      icon: FaHandHoldingHeart,
      title: 'Human Rights Advocacy',
      description: 'Working with international organizations to promote and protect human rights globally.',
    },
    {
      icon: FaGlobeAmericas,
      title: 'Freedom of Press',
      description: 'Defending journalistic independence and fighting censorship in restrictive environments.',
    },
    {
      icon: FaUsers,
      title: 'Marginalized Communities',
      description: 'Amplifying voices of underprivileged and displaced communities worldwide.',
    },
    {
      icon: FaBook,
      title: 'Media Literacy',
      description: 'Training next generation of journalists and promoting critical media consumption.',
    },
  ]

  return (
    <section id="advocacy" className="section-shell bg-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-gold text-xs sm:text-sm font-bold tracking-[0.22em] uppercase">Commitment</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white mt-4 text-balance">
            Advocacy & Impact
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mt-6 rounded-full" />
        </motion.div>

        <div ref={ref} className="grid sm:grid-cols-2 gap-5 lg:gap-6">
          {initiatives.map((initiative, index) => {
            const Icon = initiative.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glassmorphism p-5 sm:p-6 lg:p-8 hover:border-gold/70 transition-all"
              >
                <div className="p-4 bg-gold/10 rounded-full w-fit mb-4">
                  <Icon className="text-gold" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{initiative.title}</h3>
                <p className="text-gray-light leading-relaxed">{initiative.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Advocacy
