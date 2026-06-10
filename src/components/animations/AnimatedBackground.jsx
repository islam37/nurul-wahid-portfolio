import { motion } from 'framer-motion'

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#08111f]">
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(135deg,#08111f_0%,#111827_52%,#0f2428_100%)]"
        animate={{ opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgba(212,175,55,0.10),transparent)]"
        animate={{ opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212, 175, 55, 0.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.18) 1px, transparent 1px)
          `,
          backgroundSize: '44px 44px',
        }}
        animate={{ backgroundPosition: ['0px 0px', '44px 44px'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,17,31,0.15),rgba(8,17,31,0.72))]" />
    </div>
  )
}

export default AnimatedBackground
