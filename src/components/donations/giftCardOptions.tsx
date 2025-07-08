'use client';
import { useNavigate } from '@tanstack/react-router';
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

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-8">We accept Giftcards and Normal Bank Transfers from any country, we have banks across the continents(UK, CANADA, USA, DOMINICIAN REBULIC, AFRICA)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardOptions.map((card) => (
          <div key={card.type} className="border rounded-lg shadow-sm">
            <div className="bg-gray-100 p-4 font-semibold text-lg border-b">{card.type}</div>
            <div className="p-4 space-y-2">
              {card.amounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleCardSelect(card.type, amount)}
                  className="w-full py-2 px-4 border rounded hover:bg-gray-50 text-left"
                >
                  ${amount}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftCardOptions;
