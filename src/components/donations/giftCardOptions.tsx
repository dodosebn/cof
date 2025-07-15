'use client';

import { motion } from 'framer-motion';
import { useNavigate } from '@tanstack/react-router';
import { useMemo, useState } from 'react';
import { Sparkles,  Star} from 'lucide-react';
import { FaCreditCard, FaFlag, FaGlobeAmericas,  FaShoppingBag,  FaWhatsapp } from 'react-icons/fa';
import { FiSearch } from "react-icons/fi";
import { cardOptions, getCardIcon } from './gitMaps';
import { useGiftCardStore } from '@/stores/useGiftCardStore';

// Categorize the cards
const categorizedCards = {
  popular: ['Amazon (Physical)', 'Visa', 'iTunes/Apple (eCode)', 'Google Play', 'Steam', 'PlayStation'],
  retail: ['Sephora', 'Foot Locker', 'Macy\'s', 'Nordstrom', 'Target', 'Nike', 'Lululemon'],
  prepaid: ['American Express', 'Neosurf', 'Paysafecard', 'NetSpend', 'Razer Gold'],
  us: ['US Uber', 'US Nintendo', 'US Fun & Games', 'US Dollar General', 'US Coach'],
  uk: ['UK Tesco', 'UK ASDA', 'UK Home Depot', 'UK Love2shop'],
  other: ['EUR Nintendo', 'Eneba Germany', 'Joker Card', 'US MoneyPak']
};

const GiftCardOptions = () => {
  const navigate = useNavigate();
  const setGiftCard = useGiftCardStore((state) => state.setGiftCard);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleCardSelect = (type: string, amount: number) => {
    setGiftCard(type, amount);
    navigate({ to: '/giftcard' });
  };

  const filteredCards = useMemo(() => {
    let filtered = cardOptions;
    
    // Apply category filter
    if (activeFilter) {
      filtered = filtered.filter(card => 
        categorizedCards[activeFilter as keyof typeof categorizedCards].includes(card.type)
      );
    }
    
    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(card => 
        card.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [searchTerm, activeFilter]);

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Main Intro - More compact */}
      <div className="text-center mb-6">
        <h1 className="text-xl md:text-2xl font-bold mb-2">
          Gift Cards & Bank Transfers Accepted
        </h1>
        <p className="text-sm text-gray-600">
          Banking support in US, UK, Canada, DR, and Africa
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 md:flex justify-between">
        <div className="relative mb-4">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search gift cards..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none
             focus:ring-1 focus:ring-blue-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => setActiveFilter(null)}
            className={`flex items-center gap-1 px-3 py-1 text-sm rounded-full
               ${!activeFilter ? 'bg-blue-100 text-blue-800' : 'bg-gray-100'}`}
          >
            <FaGlobeAmericas className="h-4 w-4" /> All
          </button>
          <button
            onClick={() => setActiveFilter('popular')}
            className={`flex items-center gap-1 px-3 py-1 text-sm rounded-full
               ${activeFilter === 'popular' ? ' bg-yellow-800 text-gray-50' : 'bg-gray-100'}`}
          >
            <Star className="h-4 w-4" /> Popular
          </button>
          <button
            onClick={() => setActiveFilter('retail')}
            className={`flex items-center gap-1 px-3 py-1 text-sm rounded-full 
              ${activeFilter === 'retail' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100'}`}
          >
            <FaShoppingBag className="h-4 w-4" /> Retail
          </button>
          <button
            onClick={() => setActiveFilter('prepaid')}
            className={`flex items-center gap-1 px-3 py-1 text-sm rounded-full
               ${activeFilter === 'prepaid' ? ' bg-yellow-800 text-gray-50' : 'bg-gray-100'}`}
          >
            <FaCreditCard className="h-4 w-4" /> Prepaid
          </button>
          <button
            onClick={() => setActiveFilter('us')}
            className={`flex items-center gap-1 px-3 py-1 text-sm rounded-full
               ${activeFilter === 'us' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100'}`}
          >
            <FaFlag className="h-4 w-4" /> US
          </button>
          <button
            onClick={() => setActiveFilter('uk')}
            className={`flex items-center gap-1 px-3 py-1 text-sm rounded-full
               ${activeFilter === 'uk' ? ' bg-yellow-800 text-gray-50' : 'bg-gray-100'}`}
          >
            <FaFlag className="h-4 w-4" /> UK
          </button>
        </div>
        <div className="mb-6 flex justify-center">
        <a
          href="https://wa.me/14703903270"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-100 hover:bg-green-200 px-3 py-1.5 rounded-md text-sm"
        >
          <FaWhatsapp className="text-green-700" size={16} />
          <span className="font-medium text-green-900">
            Chat on WhatsApp
          </span>
        </a>
      </div>
      </div>

     

      {filteredCards.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredCards.map((card) => (
            <motion.div
              key={card.type}
              whileHover={{ scale: 1.02 }}
              className="rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all"
            >
              <div className="p-3 flex items-center justify-between border-b">
                <div className="flex items-center gap-2 truncate">
                  <span className="text-gray-700">
                    {getCardIcon(card.type)}
                  </span>
                  <span className="font-medium text-sm truncate">
                    {card.type}
                  </span>
                </div>
                <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>Live</span>
                </span>
              </div>

              <div className="p-3 grid grid-cols-2 gap-2">
                {card.amounts.map((amount) => (
                  <motion.button
                    key={amount}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCardSelect(card.type, amount)}
                    className="text-xs py-1.5 px-2 border rounded hover:bg-gray-50 transition-colors"
                  >
                    ${amount}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          No cards found matching your search
        </div>
      )}
    </div>
  );
};

export default GiftCardOptions;