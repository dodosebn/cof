import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';
import GiftCardDonateForm from '@/components/donations/giftcardDonationForm';
import Cheader from '@/components/cHeader';

export const Route = createFileRoute('/giftcard')({
  validateSearch: z.object({
    type: z.string().optional(),     
    amount: z.coerce.number().optional(),
  }),

  component: RouteComponent,
});

function RouteComponent() {
  return (
 <div className='overflow-x-hidden h-screen'>
            <Cheader />
      <GiftCardDonateForm />
    </div>
  );
}
