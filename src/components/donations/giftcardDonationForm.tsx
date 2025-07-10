'use client';
import { useState } from 'react';
import { useGiftCardStore } from '@/stores/useGiftCardStore';

const GiftCardDonateForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { cardType, amount } = useGiftCardStore();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const cardCode = formData.get('cardCode') as string;
    const email = formData.get('email') as string;
    const screenshot = formData.get('screenshot') as File | null;

    // Create a simplified data object
    const donationData = {
      cardType,
      amount,
      cardCode,
      email: email || 'Not provided',
      screenshot: screenshot?.name || 'Not provided',
      submittedAt: new Date().toISOString(),
    };

    try {
      // Store in localStorage (array of submissions)
      const prev = JSON.parse(localStorage.getItem('giftCardSubmissions') || '[]');
      localStorage.setItem('giftCardSubmissions', JSON.stringify([...prev, donationData]));

      setSubmitted(true);
    } catch (error) {
      console.error('LocalStorage Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-xl">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-xl font-semibold">Donate a Gift Card</h2>

          <div>
            <p className="text-sm text-gray-700">
              <strong>Gift Card:</strong> {cardType}
            </p>
            <p className="text-sm text-gray-700">
              <strong>Amount:</strong> ${amount}
            </p>
          </div>

          <label className="block">
            <span className="text-sm">Gift Card Code</span>
            <input
              name="cardCode"
              type="text"
              required
              className="w-full border p-2 rounded"
              placeholder="Enter the gift card code"
            />
          </label>

          <label className="block">
            <span className="text-sm">Upload Screenshot (optional)</span>
            <input name="screenshot" type="file" accept="image/*" />
          </label>

          <label className="block">
            <span className="text-sm">Your Email (optional)</span>
            <input
              name="email"
              type="email"
              className="w-full border p-2 rounded"
              placeholder="Enter your email for receipt"
            />
          </label>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 ${
              isLoading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Submitting...' : 'Submit Gift Card'}
          </button>
        </form>
      ) : (
        <div className="text-center space-y-4">
          <p className="text-green-600 font-medium">
            🎉 Thank you! Your card was submitted successfully.
          </p>
          <p>
            If anything went wrong,{' '}
            <a href="https://wa.me/14703903270" className="underline text-blue-600">
              chat with us on WhatsApp
            </a>
            .
          </p>
        </div>
      )}
    </div>
  );
};

export default GiftCardDonateForm;
