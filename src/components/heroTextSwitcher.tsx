
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const HeroTextSwitcher = ({ textOptions }: { textOptions: Array<string> }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % textOptions.length);
    }, 3000); // faster speed
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[80px] md:h-[120px] overflow-hidden text-[#FAA45B] font-extrabold
     text-[20px] md:text-[95px] flex items-start justify-start">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="absolute"
        >
          {textOptions[activeIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
