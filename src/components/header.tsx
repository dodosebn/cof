import { useState } from 'react';
import { RiMenu2Fill } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';
import { CiLocationOn } from 'react-icons/ci';
import { FaAngleRight, FaEnvelope } from 'react-icons/fa';
import { Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#f5f5f5] px-4">
      {/* Desktop Header */}
      <div className="hidden md:block max-w-7xl mx-auto md:px-12">
        <div className="py-7">
          <div className="flex justify-between">
            <div className="flex flex-row space-x-5 items-stretch">
              {/* Location */}
              <div className="flex space-x-2 items-center">
                <CiLocationOn className="text-[#f19383]" size={35} />
                <div>
                  <h1 className="text-[#002C5F] text-[15px] font-bold">Israel HQ</h1>
                  <p className="text-[#002C5FCC] text-[13px]">Visit Our site</p>
                </div>
              </div>

              {/* Divider */}
              <div className="relative mx-4">
                <div className="absolute top-0 bottom-0 h-[20rem] left-1/2 w-[0.5px] bg-gray-400/40 transform -translate-x-1/2 -translate-y-1/2" />
              </div>

              {/* Email */}
              <a
                href="mailto:fidelityxpresspayment@gmail.com?subject=Support%20for%20Orphanage%20and%20Help%20Services&body=Hello,%0D%0A%0D%0AI’m reaching out regarding support or help services.%0D%0A%0D%0AWhatsApp Contact: +14703903270%0D%0A%0D%0AThank you."
                className="flex space-x-2 items-center"
              >
                <FaEnvelope className="text-[#ae6a5e]" size={30} />
                <div className="flex flex-col items-start">
                  <h1 className="text-[#002C5F] text-[15px] font-bold">Email</h1>
                  <p className="text-[#002C5FCC] text-[13px]">Information center</p>
                </div>
              </a>
            </div>

            {/* Title & Donate Button */}
            <div className="flex justify-center items-center gap-7">
              <h1 className="text-2xl font-black inline-block">
                Children of Faith Homes & Private Help Services
              </h1>

              <button className="bg-[#B23E3E] gap-4 flex items-center text-white font-bold px-4 py-3 rounded-sm transition-all duration-300 transform hover:scale-105 group">
                <Link to="/donate">
                  <div className="relative h-6 overflow-hidden">
                    <div className="transition-transform duration-800 ease-in-out group-hover:-translate-y-6">
                      <span className="block h-6">Donate Now</span>
                      <span className="block h-6">Sponsor Us</span>
                    </div>
                  </div>
                </Link>
                <FaAngleRight className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="relative flex flex-col md:hidden w-full">
        {/* Top Bar */}
        <div className="flex justify-between items-center py-3 px-4 w-full">
          <img
            src="/logo.png"
            alt="Children of Faith Homes logo"
            className="w-16 h-16 object-contain"
          />

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 focus:outline-none"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <IoClose size={28} className="text-[#002C5F]" />
            ) : (
              <RiMenu2Fill size={28} className="text-[#002C5F]" />
            )}
          </button>
        </div>

        {/* Scrolling Title */}
        <div className="w-full overflow-hidden">
          <motion.div
            className="whitespace-nowrap"
            initial={{ x: '100%' }}
            animate={{ x: '-100%' }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: 'linear',
            }}
          >
            <h1 className="text-lg font-bold text-[#002C5F] inline-block px-2 py-2">
              Children of Faith Homes & Private Help Services
            </h1>
          </motion.div>
        </div>

        {/* Slide Down Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden w-full"
        >
          {isMenuOpen && (
            <div className="w-full">
              {/* Links */}
              <ul className="flex flex-col text-sm font-medium divide-y divide-gray-100">
                {['Join Us', 'What we Do', 'Help Center'].map((item, index) => (
                  <li key={index}>
                    <Link
                      to="/"
                      className="block px-4 py-4 text-[15px] font-semibold text-[#000] transition-colors"
                      activeProps={{ className: 'text-[#000]' }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Contact Info */}
              <div className="px-4 py-4 grid grid-cols-2 gap-4">
                <div className="flex items-start space-x-2">
                  <CiLocationOn className="text-[#f19383] mt-1" size={20} />
                  <div>
                    <p className="text-[#002C5F] text-[14px] font-bold">Israel HQ</p>
                    <p className="text-[#002C5FCC] text-[12px]">Visit Our site</p>
                  </div>
                </div>

                <a
                  href="mailto:Childrenoffaithhomes@gmail.com"
                  className="flex items-start space-x-2"
                >
                  <FaEnvelope className="text-[#ae6a5e] mt-1" size={18} />
                  <div>
                    <p className="text-[#002C5F] text-[14px] font-bold">Email Us</p>
                    <p className="text-[#002C5FCC] text-[12px]">Information center</p>
                  </div>
                </a>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
