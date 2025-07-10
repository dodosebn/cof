'use client';

import { motion } from 'framer-motion';
import { useNavigate } from '@tanstack/react-router';
import {
  FaAmazon,
  FaApple,
  FaWhatsapp,
} from 'react-icons/fa';
import {
  SiEbay,
  SiGoogleplay,
  SiNetflix,
  SiPlaystation,
  SiRoblox,
  SiSteam,
  SiVisa,
  SiWalmart,
} from 'react-icons/si';
import { Sparkles } from 'lucide-react';
import { useGiftCardStore } from '@/stores/useGiftCardStore';

const GiftCardOptions = () => {
  const navigate = useNavigate();
  const setGiftCard = useGiftCardStore((state) => state.setGiftCard);

  const cardOptions = [
    { type: 'Amazon', amounts: [25, 50, 100, 200] },
    { type: 'iTunes', amounts: [25, 50, 100] },
    { type: 'Google Play', amounts: [10, 25, 50, 100] },
    { type: 'Steam', amounts: [20, 50, 100] },
    { type: 'Visa', amounts: [50, 100, 200] },
    { type: 'eBay', amounts: [25, 50, 100] },
    { type: 'Walmart', amounts: [25, 50, 100] },
    { type: 'Netflix', amounts: [30, 60, 100] },
    { type: 'Roblox', amounts: [10, 25, 50] },
    { type: 'PlayStation', amounts: [25, 50, 100] },
  ];

  const handleCardSelect = (type: string, amount: number) => {
    setGiftCard(type, amount);
    navigate({ to: '/giftcard' });
  };

  const getCardIcon = (type: string) => {
    switch (type) {
      case 'Amazon':
        return <FaAmazon className="w-5 h-5" />;
      case 'iTunes':
        return <FaApple className="w-5 h-5" />;
      case 'Google Play':
        return <SiGoogleplay className="w-5 h-5" />;
      case 'Steam':
        return <SiSteam className="w-5 h-5" />;
      case 'Visa':
        return <SiVisa className="w-5 h-5" />;
      case 'eBay':
        return <SiEbay className="w-5 h-5" />;
      case 'Walmart':
        return <SiWalmart className="w-5 h-5" />;
      case 'Netflix':
        return <SiNetflix className="w-5 h-5" />;
      case 'Roblox':
        return <SiRoblox className="w-5 h-5" />;
      case 'PlayStation':
        return <SiPlaystation className="w-5 h-5" />;
      default:
        return <FaApple className="w-5 h-5" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Main Intro */}
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          We accept Gift Cards and Bank Transfers globally
        </h1>
        <p className="text-base md:text-lg font-medium">
          With banking support in the{' '}
          <span className="text-black font-semibold">
            UK, Canada, USA, Dominican Republic, and Africa
          </span>
          .
        </p>
      </div>

      {/* Donation Heading */}
      <div className="text-center mb-8">
      <h2
  className="text-xl md:text-2xl font-semibold 
  flex items-center justify-center gap-2 
  text-transparent bg-clip-text 
  bg-gradient-to-r from-[#B23E3E] to-[#FF8080]"
>
  You can also make a donation using any of the Gift Card options below
  <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
    Donate Now
  </span>
</h2>

        <p className="text-sm text-gray-600 mt-1">
          Simply select a card and choose your amount to proceed.
        </p>
      </div>

      {/* WhatsApp CTA */}
      <div className="mb-10 text-center">
        <p className="text-base md:text-lg font-medium mb-2">
          To receive account details or start your transaction, kindly reach out to us directly via WhatsApp:
        </p>
        <div className="flex justify-center">
          <a
            href="https://wa.me/14703903270"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-100 hover:bg-green-200 px-4 py-2 rounded-md shadow transition"
          >
            <FaWhatsapp className="text-green-700" size={28} />
            <span className="font-bold text-green-900 text-sm md:text-base">
              Chat on WhatsApp
            </span>
          </a>
        </div>
      </div>

      {/* Card Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardOptions.map((card) => (
          <motion.div
            key={card.type}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-3 flex justify-between items-center border-b">
              <div className="flex items-center gap-2 font-semibold text-lg text-gray-800">
                {getCardIcon(card.type)}
                {card.type}
              </div>
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Live
              </span>
            </div>

            {/* Amount Buttons */}
            <div className="p-4 space-y-2 bg-white/60 backdrop-blur-sm">
              {card.amounts.map((amount) => (
                <motion.button
                  key={amount}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleCardSelect(card.type, amount)}
                  className="w-full py-2 px-4 border border-gray-300 rounded-md bg-white hover:bg-gray-100 transition-all duration-200 text-gray-800 font-medium"
                >
                  ${amount}
                </motion.button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GiftCardOptions;
