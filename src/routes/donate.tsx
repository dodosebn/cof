import { createFileRoute } from '@tanstack/react-router'
import GiftCardOptions from '@/components/donations/giftCardOptions';
import DeHeader from '@/components/donations/deHeader';

export const Route = createFileRoute('/donate')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <DeHeader />
    < GiftCardOptions />
  </div>
}
