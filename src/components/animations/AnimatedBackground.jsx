import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const AnimatedBackground = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
      size: 2 + Math.random() * 8,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-navy"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Large Floating Shapes - Top Left */}
      <motion.div
        className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-gold/20 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Large Floating Shapes - Bottom Right */}
      <motion.div
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Cube 1 */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          rotateZ: [0, 180],
          x: [0, 30, -20, 0],
          y: [0, 20, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div
          className="w-full h-full border-2 border-gold/40 rounded-lg shadow-lg"
          style={{
            transform: 'perspective(1000px) rotateX(45deg) rotateY(45deg)',
            boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)',
          }}
        />
      </motion.div>

      {/* Floating Cube 2 */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-24 h-24"
        animate={{
          rotateX: [360, 0],
          rotateY: [360, 0],
          x: [0, -40, 20, 0],
          y: [0, -25, 35, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div
          className="w-full h-full border-2 border-gold-dark/30 rounded-lg"
          style={{
            transform: 'perspective(1000px) rotateX(-45deg) rotateY(-45deg)',
            boxShadow: '0 0 20px rgba(184, 150, 15, 0.2)',
          }}
        />
      </motion.div>

      {/* 3D Rotating Sphere */}
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-40 h-40 rounded-full border-2 border-gold/30 flex items-center justify-center"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          x: [0, 40, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          boxShadow: '0 0 40px rgba(212, 175, 55, 0.25), inset 0 0 40px rgba(212, 175, 55, 0.1)',
        }}
      >
        <div className="w-32 h-32 rounded-full border border-gold/40" />
      </motion.div>

      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-gradient-to-b from-gold/50 to-transparent rounded-full"
          style={{
            left: `${particle.left}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -window.innerHeight],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Glowing Orb - Center Left */}
      <motion.div
        className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full blur-2xl"
        style={{
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.35) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Glowing Orb - Center Right */}
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full blur-2xl"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Grid Pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(212, 175, 55, 0.15) 25%, rgba(212, 175, 55, 0.15) 26%, transparent 27%, transparent 74%, rgba(212, 175, 55, 0.15) 75%, rgba(212, 175, 55, 0.15) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(212, 175, 55, 0.15) 25%, rgba(212, 175, 55, 0.15) 26%, transparent 27%, transparent 74%, rgba(212, 175, 55, 0.15) 75%, rgba(212, 175, 55, 0.15) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  )
}

export default AnimatedBackground
