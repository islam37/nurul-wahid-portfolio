import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import galleryImages from '../../data/gallery.json'

const Gallery = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="gallery" className="py-24 bg-charcoal/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-inter tracking-wider uppercase">Visual Journey</span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mt-4">
            Photo Gallery
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mt-6" />
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-2xl overflow-hidden h-64 md:h-80 group"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:brightness-75 transition-all"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-end justify-center pb-6">
                <button className="px-6 py-2 bg-gold text-navy font-semibold rounded-full hover:bg-gold-dark transition-all">
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