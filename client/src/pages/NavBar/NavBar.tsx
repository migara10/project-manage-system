import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Animation variants for the mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 20, scale: 0.95 },
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold">
              MyLogo
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Enhanced Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-gray-700"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <motion.a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                Home
              </motion.a>
              <motion.a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.2 }}
              >
                About
              </motion.a>
              <motion.a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.3 }}
              >
                Services
              </motion.a>
              <motion.a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.4 }}
              >
                Contact
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
