import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaFacebook, FaTwitter, FaLinkedin, FaChevronDown } from 'react-icons/fa'
import profileData from '../../data/profile.json'

const Hero = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const socialLinks = profileData.socialLinks || {}

  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden flex items-center pt-24 pb-16 sm:pt-28 lg:pt-24">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Subtle Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://iimtu.edu.in/blog/wp-content/uploads/2023/03/Blog-Update-5-2048x2048.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.14,
            filter: 'saturate(0.65)',
          }}
        />

        {/* Premium Dark Base */}
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(8,17,31,0.96)_0%,rgba(12,22,38,0.91)_50%,rgba(14,28,39,0.86)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(212,175,55,0.14),transparent_32%),linear-gradient(180deg,rgba(0,0,0,0.16),rgba(0,0,0,0.56))]" />

        {/* Accent wash */}
        <motion.div
          className="absolute top-0 right-0 h-full w-1/2 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, transparent, rgba(212, 175, 55, 0.08))',
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

      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] gap-10 lg:gap-16 xl:gap-24 items-center">
          {/* Left - Main Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
            >
              <div className="inline-block rounded-lg border border-gold/35 bg-gold/10 px-3.5 py-2 shadow-lg shadow-gold/5">
                <span className="text-gold text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase">
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
              <h1 className="text-[clamp(2.9rem,13vw,5.7rem)] lg:text-[clamp(4.6rem,7.2vw,7.5rem)] font-playfair font-bold text-white leading-[0.95] tracking-normal text-balance">
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
              <p className="text-lg sm:text-xl lg:text-2xl text-gold font-medium leading-snug">{profileData.title}</p>
              <div className="mx-auto lg:mx-0 w-16 h-1 bg-gradient-to-r from-gold via-gold-dark to-transparent rounded-full" />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mx-auto lg:mx-0 text-base sm:text-lg text-gray-light leading-relaxed max-w-2xl"
            >
              {profileData.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row sm:flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4"
            >
              <Link
                to="/portfolio"
                className="premium-button bg-gold text-navy shadow-lg shadow-gold/20 hover:bg-gold-dark hover:-translate-y-0.5"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="premium-button border border-gold/70 bg-white/[0.03] text-gold hover:bg-gold/10 hover:border-gold hover:-translate-y-0.5"
              >
                Get In Touch
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="flex justify-center lg:justify-start gap-3 pt-2 sm:pt-4"
            >
              <motion.a
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.95 }}
                href={socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-gold/10 rounded-lg text-gold hover:bg-gold/20 transition-all duration-300"
              >
                <FaFacebook size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.95 }}
                href={socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-gold/10 rounded-lg text-gold hover:bg-gold/20 transition-all duration-300"
              >
                <FaTwitter size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.95 }}
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-gold/10 rounded-lg text-gold hover:bg-gold/20 transition-all duration-300"
              >
                <FaLinkedin size={18} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Editorial Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none"
          >
            <div className="premium-card overflow-hidden p-3 sm:p-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-charcoal">
                <img
                  src="https://iimtu.edu.in/blog/wp-content/uploads/2023/03/Blog-Update-5-2048x2048.jpg"
                  alt="Journalist reporting in the field"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <div className="rounded-lg border border-white/10 bg-navy/75 p-4 backdrop-blur-md">
                    <p className="text-xs uppercase tracking-[0.22em] text-gold">Based in Barcelona</p>
                    <p className="mt-2 text-sm text-white/80">Investigative journalism, human rights reporting, and global media work.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20 hidden sm:block"
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
