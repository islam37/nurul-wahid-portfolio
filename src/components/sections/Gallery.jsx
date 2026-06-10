import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import galleryImages from '../../data/gallery.json'

const Gallery = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="gallery" className="section-shell bg-charcoal/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-gold text-xs sm:text-sm font-bold tracking-[0.22em] uppercase">Visual Journey</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white mt-4 text-balance">
            Photo Gallery
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mt-6 rounded-full" />
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-lg overflow-hidden aspect-[4/3] sm:aspect-[3/4] lg:aspect-[4/3] group shadow-[0_20px_60px_rgba(0,0,0,0.28)]"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:brightness-75 transition-all"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-end justify-center pb-6">
                <button className="premium-button min-h-10 px-5 py-2 bg-gold text-navy hover:bg-gold-dark">
                  View
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
