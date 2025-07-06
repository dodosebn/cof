import { useState } from 'react';
import { RiMenu2Fill } from "react-icons/ri";
// eslint-disable-next-line import/no-duplicates
import { IoClose } from "react-icons/io5";
import { CiLocationOn } from 'react-icons/ci';
import { FaAngleRight, FaEnvelope, FaWhatsapp, FaYoutube } from 'react-icons/fa';
// eslint-disable-next-line import/no-duplicates
import { IoLogoTwitter } from 'react-icons/io5';
import { LuPhoneCall } from 'react-icons/lu';
import { Link } from '@tanstack/react-router';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='bg-[#f5f5f5] px-4 '>
      <div className='md:block hidden  max-w-7xl mx-auto md:px-12'>
        <div className='py-7'>
          <div className='flex justify-between'>
            <div className='flex flex-row space-x-5 items-stretch relative'>
              <div className='flex space-x-2 items-center'>
                <CiLocationOn className='text-[#f19383]' size={35} />
                <div>
                  <h1 className='text-[#002C5F] text-[15px] font-bold'>Israel HQ</h1>
                  <p className='text-[#002C5FCC] text-[13px]'>Visit Our site</p>
                </div>
              </div>

              <div className="relative mx-4">
                <div className="absolute top-0 bottom-0 h-[20rem] left-1/2 
                w-[0.5px] bg-gray-400/40 transform -translate-x-1/2 -translate-y-1/2" />
              </div>

              <div className='flex space-x-2 items-center'>
                <FaEnvelope className='text-[#f19383]' size={30}/>

                {/* <LuPhoneCall  /> */}
                <div>
                  <h1 className='text-[#002C5F] text-[15px] font-bold'>Email</h1>
                  {/* <p className='text-[#002C5FCC] text-[13px]'>Information center</p> */}
                </div>
              </div>
            </div>

            <div className='flex justify-center items-center gap-7'>
              {/* <div className='flex space-x-5'>
                <FaFacebook size={24} className='text-gray-400 hover:text-[#f19387]' />
                <IoLogoTwitter size={24} className='text-gray-400 hover:text-[#f19387]' />
                <FaYoutube size={24} className='text-gray-400 hover:text-[#f19387]' />
              </div> */}
              <h1 className='text-2xl font-black'>Children of Faith Homes & Private Help Services</h1>
              <button className='bg-[#B23E3E] gap-4 flex items-center text-white font-bold px-4 py-3 rounded-sm transition-all duration-300 transform hover:scale-105 group'>
                <Link to='/'>
                  <div className='relative h-6 overflow-hidden'>
                    <div className='transition-transform duration-800 ease-in-out group-hover:-translate-y-6'>
                         <span className="block h-6">Donate Now</span>
                        <span className="block h-6">Sponsor Us</span>
                    </div>
                  </div>
                </Link>
                <FaAngleRight className='text-lg' />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='relative flex flex-col md:hidden'>
        <div className='flex justify-between items-center z-50 relative'>
          <img src='/logo.png' alt="logo" className='w-24 h-24'/>
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer transition-transform duration-300 transform"
          >
            <div className={`transition-all duration-500 ease-in-out ${isMenuOpen ? 'rotate-90 scale-110' : 'rotate-0'}`}>
              {isMenuOpen ? <IoClose size={32} /> : <RiMenu2Fill size={32} />}
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="fixed top-[70px] left-0 w-screen bg-white z-50 animate-slideDown">
            <ul className="flex flex-col text-sm font-medium">
              {['Join Us',
'What we Do',
'help center'].map(
                (item, index) => (
                  <li
                    key={index}
                    className="text-[14px] font-bold capitalize px-7 py-4 border-b border-gray-300/40"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
