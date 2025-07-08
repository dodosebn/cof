'use client';
import { useState } from 'react';
import { useGiftCardStore } from '@/stores/useGiftCardStore'

const GiftCardDonateForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { cardType, amount } = useGiftCardStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/giftcard-submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-xl">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-xl font-semibold">Donate a Gift Card</h2>

          <input type="hidden" name="cardType" value={cardType} />
          <input type="hidden" name="amount" value={amount} />

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
              className="w-full border p-2 rounded"
              required
              placeholder="Enter the gift card code"
            />
          </label>

          <label className="block">
            <span className="text-sm">Upload Screenshot (optional)</span>
            <input name="screenshot" type="file" accept="image/*" className="w-full" />
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
            className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors"
          >
            Submit Gift Card
          </button>
        </form>
      ) : (
        <div className="text-center space-y-4">
          <p className="text-green-600 font-medium">🎉 Thank you! Your card was submitted successfully.</p>
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
