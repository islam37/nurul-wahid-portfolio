import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Tv, Mic, Camera, Newspaper, Pen } from 'lucide-react';
import experienceData from '../../data/experience.json';

const iconMap = { Tv, Mic, Camera, Newspaper, Pen };

const CareerTimeline = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="career" className="section-shell bg-charcoal/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-gold text-xs sm:text-sm font-bold tracking-[0.22em] uppercase">Career Journey</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white mt-4 text-balance">
            Professional Timeline
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mt-6 rounded-full" />
        </motion.div>

        <div ref={ref} className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gold/30 hidden md:block" />

          <div className="space-y-6 md:space-y-10">
            {experienceData.timeline.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className={`relative md:flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="md:w-1/2 md:p-6">
                    <div className="premium-card p-5 sm:p-6 border-gold/20 hover:border-gold/70 transition-all">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-gold/10 rounded-full">
                          <Icon className="text-gold" size={24} />
                        </div>
                        <span className="text-gold font-semibold">{item.year}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-playfair text-white mb-2">{item.title}</h3>
                      <p className="text-gold mb-3">{item.company}</p>
                      <p className="text-gray-light">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold rounded-full hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
