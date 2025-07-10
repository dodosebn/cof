'use client';

import { motion } from 'framer-motion';
import { useNavigate } from '@tanstack/react-router';
// eslint-disable-next-line import/no-duplicates
import { FaApple, FaGamepad, FaGift  } from "react-icons/fa";
// eslint-disable-next-line import/no-duplicates
import { FaAmazon } from "react-icons/fa";
// eslint-disable-next-line import/no-duplicates
import { FaRegCreditCard } from "react-icons/fa";


import {
  Sparkles,
} from 'lucide-react';
import { useGiftCardStore } from '@/stores/useGiftCardStore';

const GiftCardOptions = () => {
  const navigate = useNavigate();
  const setGiftCard = useGiftCardStore((state) => state.setGiftCard);

  const cardOptions = [
    { type: 'Amazon', amounts: [10, 25, 50, 100] },
    { type: 'iTunes', amounts: [15, 25, 50] },
    { type: 'Google Play', amounts: [10, 20, 50, 100] },
    { type: 'Steam', amounts: [20, 50, 100] },
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
        return <FaGift  className="w-5 h-5" />;
      case 'Steam':
        return <FaGamepad className="w-5 h-5" />;
      default:
        return <FaRegCreditCard className="w-5 h-5" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        We accept Gift Cards and Bank Transfers from anywhere in the world —
        with banking support in the{' '}
        <span className="text-black font-semibold">
          UK, Canada, USA, Dominican Republic, and Africa
        </span>
        .
      </h1>

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

            {/* Body */}
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
