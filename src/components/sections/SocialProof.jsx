import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaFacebook } from 'react-icons/fa'

const SocialProof = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  useEffect(() => {
    // Load Facebook SDK
    if (window.FB) {
      window.FB.XFBML.parse()
    } else {
      const script = document.createElement('script')
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0'
      script.async = true
      script.defer = true
      script.crossOrigin = 'anonymous'
      document.body.appendChild(script)
      
      window.fbAsyncInit = function() {
        FB.XFBML.parse()
      }
    }
  }, [])

  return (
    <section id="social-proof" className="section-shell bg-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-gold text-xs sm:text-sm font-bold tracking-[0.22em] uppercase">Active Engagement</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-white mt-4 text-balance">
            Social Proof Impact
          </h2>
          <p className="text-gray-light text-base sm:text-lg max-w-2xl mx-auto mt-4">
            Follow my latest work, investigations, and stories
          </p>
          <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mt-6 rounded-full" />
        </motion.div>

        <div ref={ref} className="grid gap-5 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="glassmorphism overflow-hidden p-3 sm:p-4"
          >
            <div className="fb-post" data-href="https://www.facebook.com/nurulwahid/posts/123456" data-width="500" data-show-text="true"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="glassmorphism overflow-hidden p-3 sm:p-4"
          >
            <div className="fb-post" data-href="https://www.facebook.com/nurulwahid/posts/123455" data-width="500" data-show-text="true"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="glassmorphism overflow-hidden p-3 sm:p-4"
          >
            <div className="fb-post" data-href="https://www.facebook.com/nurulwahid/posts/123454" data-width="500" data-show-text="true"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="glassmorphism overflow-hidden p-3 sm:p-4"
          >
            <div className="fb-post" data-href="https://www.facebook.com/nurulwahid/posts/123453" data-width="500" data-show-text="true"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="glassmorphism overflow-hidden p-3 sm:p-4"
          >
            <div className="fb-post" data-href="https://www.facebook.com/nurulwahid/posts/123452" data-width="500" data-show-text="true"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="glassmorphism overflow-hidden p-3 sm:p-4"
          >
            <div className="fb-post" data-href="https://www.facebook.com/nurulwahid/posts/123451" data-width="500" data-show-text="true"></div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-light mb-4">Follow for latest updates and investigations</p>
          <a
            href="https://facebook.com/nurulwahid"
            target="_blank"
            rel="noreferrer"
            className="premium-button gap-2 bg-[#1877f2] text-white hover:bg-[#0f66d6]"
          >
            <FaFacebook size={20} />
            Follow on Facebook
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialProof
