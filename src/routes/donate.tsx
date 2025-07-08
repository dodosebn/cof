import { createFileRoute } from '@tanstack/react-router'
import GiftCardOptions from '@/components/donations/giftCardOptions';

export const Route = createFileRoute('/donate')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    < GiftCardOptions />
  </div>
}
