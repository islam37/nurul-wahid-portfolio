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
          ? "bg-black/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
          >
            <Link
              to="/"
              className="text-2xl font-playfair font-bold bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent"
            >
              Nurul Wahid
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className="text-white hover:text-gold transition-colors font-inter"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Social Icons (Desktop) */}
          <div className="hidden md:flex space-x-4">
            <motion.a whileHover={{ scale: 1.1 }} href="https://facebook.com/nurulwahid" target="_blank" rel="noreferrer">
              <FaFacebook size={20} className="text-white hover:text-gold" />
            </motion.a>

            <motion.a whileHover={{ scale: 1.1 }} href="https://twitter.com/nurulwahid" target="_blank" rel="noreferrer">
              <FaTwitter size={20} className="text-white hover:text-gold" />
            </motion.a>

            <motion.a whileHover={{ scale: 1.1 }} href="https://linkedin.com/in/nurulwahid" target="_blank" rel="noreferrer">
              <FaLinkedin size={20} className="text-white hover:text-gold" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
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
              className="md:hidden mt-4 py-4 bg-black/90 backdrop-blur-xl rounded-2xl overflow-hidden"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-left px-6 py-3 text-white hover:text-gold hover:bg-white/5 transition-colors"
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Social */}
              <div className="flex justify-center gap-6 mt-4">
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