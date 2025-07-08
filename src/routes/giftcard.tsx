import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';
import GiftCardDonateForm from '@/components/donations/giftcardDonationForm';

export const Route = createFileRoute('/giftcard')({
  validateSearch: z.object({
    type: z.string().optional(),     // allow route to load without query
    amount: z.coerce.number().optional(), // coerce string to number
  }),

  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="py-8">
      <GiftCardDonateForm />
    </div>
  );
}
