import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaFacebook, FaTwitter, FaLinkedin, FaChevronDown } from 'react-icons/fa'
import profileData from '../../data/profile.json'

const Hero = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Subtle Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://iimtu.edu.in/blog/wp-content/uploads/2023/03/Blog-Update-5-2048x2048.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1,
            filter: 'blur(12px)',
          }}
        />

        {/* Premium Dark Base */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-charcoal to-navy opacity-95" />

        {/* Accent Glow - Top Right */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Accent Glow - Bottom Left */}
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.05) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Main Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
            >
              <div className="inline-block px-4 py-2 bg-gold/12 border border-gold/40 rounded-full">
                <span className="text-gold text-xs font-bold tracking-widest uppercase">
                  Award-Winning Journalist
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-playfair font-bold text-white leading-tight tracking-tight">
                {profileData.name}
              </h1>
            </motion.div>

            {/* Subtitle with Accent Line */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <p className="text-2xl text-gold font-medium">{profileData.title}</p>
              <div className="w-16 h-1 bg-gradient-to-r from-gold via-gold-dark to-transparent rounded-full" />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-light leading-relaxed max-w-2xl"
            >
              {profileData.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link
                to="/portfolio"
                className="px-8 py-3 bg-gold text-navy font-bold rounded-lg hover:bg-gold-dark transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 uppercase text-sm tracking-wide"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border-2 border-gold text-gold font-bold rounded-lg hover:bg-gold/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 uppercase text-sm tracking-wide"
              >
                Get In Touch
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="flex gap-4 pt-4"
            >
              <motion.a
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.95 }}
                href={profileData.social?.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-gold/10 rounded-full text-gold hover:bg-gold/20 transition-all duration-300"
              >
                <FaFacebook size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.95 }}
                href={profileData.social?.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-gold/10 rounded-full text-gold hover:bg-gold/20 transition-all duration-300"
              >
                <FaTwitter size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.95 }}
                href={profileData.social?.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-gold/10 rounded-full text-gold hover:bg-gold/20 transition-all duration-300"
              >
                <FaLinkedin size={18} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - 3D Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden md:block relative h-96"
          >
            {/* 3D Sphere Container */}
            <motion.div
              animate={{
                y: [0, 30, 0],
                x: [0, 15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <motion.div
                animate={{
                  rotateX: [0, 360],
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="w-64 h-64 rounded-full border-2 border-gold/40 shadow-2xl flex items-center justify-center"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, rgba(212, 175, 55, 0.15), transparent)',
                  boxShadow: '0 0 60px rgba(212, 175, 55, 0.2), inset 0 0 60px rgba(212, 175, 55, 0.05)',
                }}
              >
                <motion.div
                  animate={{
                    rotateX: [360, 0],
                    rotateY: [360, 0],
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="w-48 h-48 rounded-full border border-gold/30"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.button
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gold hover:text-gold-dark transition-colors"
          aria-label="Scroll down"
        >
          <FaChevronDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
