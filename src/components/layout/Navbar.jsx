import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07101d]/88 backdrop-blur-xl border-b border-white/10 shadow-[0_14px_40px_rgba(0,0,0,0.28)]"
          : "bg-gradient-to-b from-black/35 to-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
          >
            <Link
              to="/"
              className="text-xl sm:text-2xl font-playfair font-bold bg-gradient-to-r from-white via-gold to-gold-dark bg-clip-text text-transparent"
            >
              Nurul Wahid
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2 rounded-lg border border-white/10 bg-white/[0.04] p-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className="block rounded-md px-3 lg:px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors font-inter"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Social Icons (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a whileHover={{ scale: 1.1 }} href="https://facebook.com/nurulwahid" target="_blank" rel="noreferrer">
              <FaFacebook size={18} className="text-white/75 hover:text-gold transition-colors" />
            </motion.a>

            <motion.a whileHover={{ scale: 1.1 }} href="https://twitter.com/nurulwahid" target="_blank" rel="noreferrer">
              <FaTwitter size={18} className="text-white/75 hover:text-gold transition-colors" />
            </motion.a>

            <motion.a whileHover={{ scale: 1.1 }} href="https://linkedin.com/in/nurulwahid" target="_blank" rel="noreferrer">
              <FaLinkedin size={18} className="text-white/75 hover:text-gold transition-colors" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-3 overflow-hidden rounded-lg border border-white/10 bg-[#07101d]/95 py-3 shadow-2xl backdrop-blur-xl"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-left px-5 py-3 text-white/85 hover:text-white hover:bg-white/[0.08] transition-colors"
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Social */}
              <div className="flex justify-center gap-6 border-t border-white/10 mt-3 pt-4">
                <a href="https://facebook.com/nurulwahid" target="_blank" rel="noreferrer">
                  <FaFacebook className="text-white" />
                </a>
                <a href="https://twitter.com/nurulwahid" target="_blank" rel="noreferrer">
                  <FaTwitter className="text-white" />
                </a>
                <a href="https://linkedin.com/in/nurulwahid" target="_blank" rel="noreferrer">
                  <FaLinkedin className="text-white" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
