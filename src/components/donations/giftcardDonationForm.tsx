'use client';
import { useState } from 'react';
import { useGiftCardStore } from '@/stores/useGiftCardStore';

const GiftCardDonateForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { cardType, amount } = useGiftCardStore();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsLoading(true);
  setError(null);

  try {
    const formData = new FormData(e.currentTarget);
    formData.append('cardType', cardType);
    formData.append('amount', amount.toString());

    const response = await fetch('/api/gift-card', {
      method: 'POST',
      body: formData,
    });

    // Check if response is OK first
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Then try to parse JSON
    const result = await response.json();
    
    if (!result.success) {
      throw new Error(result.message || 'Submission failed');
    }

    setSubmitted(true);
  } catch (err) {
    console.error('Submission error:', err);
    setError(err instanceof Error ? err.message : 'Submission failed');
  } finally {
    setIsLoading(false);
  }
};

  if (submitted) {
    return (
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-xl text-center space-y-4">
        <div className="text-green-600 font-medium text-lg">
          🎉 Thank you for your donation!
        </div>
        <p className="text-gray-700">
          Your {cardType} gift card for ${amount} has been received.
        </p>
        <p className="text-sm text-gray-600">
          Need help?{' '}
          <a 
            href="https://wa.me/14703903270" 
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact us on WhatsApp
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Donate Your Gift Card</h2>
      
      <div className="mb-4 p-3 bg-gray-50 rounded-lg">
        <p className="font-medium">{cardType}</p>
        <p className="text-lg font-bold">${amount}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="cardCode" className="block text-sm font-medium text-gray-700 mb-1">
            Gift Card Code *
          </label>
          <input
            id="cardCode"
            name="cardCode"
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the 16-digit code"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Your Email (optional)
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="your@email.com"
          />
          <p className="text-xs text-gray-500 mt-1">
            For donation receipt and updates
          </p>
        </div>

        <div>
          <label htmlFor="screenshot" className="block text-sm font-medium text-gray-700 mb-1">
            Upload Screenshot (optional)
          </label>
          <input
            id="screenshot"
            name="screenshot"
            type="file"
            accept="image/*,.pdf"
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
          <p className="text-xs text-gray-500 mt-1">
            Upload a clear image of the gift card if available
          </p>
        </div>

        {error && (
          <div className="p-3 bg-red-50 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-2 px-4 rounded-md text-white font-medium
            ${isLoading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700'}
            transition-colors`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            'Submit Gift Card'
          )}
        </button>
      </form>
    </div>
  );
};

export default GiftCardDonateForm;