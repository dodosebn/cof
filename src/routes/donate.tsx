import { createFileRoute } from '@tanstack/react-router'
import GiftCardOptions from '@/components/donations/giftCardOptions';
import DeHeader from '@/components/donations/deHeader';
import Cheader from '@/components/cHeader';
import Footer from '@/components/footer';

export const Route = createFileRoute('/donate')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='overflow-x-hidden h-screen'>
            <Cheader />
    <DeHeader />
    < GiftCardOptions />
                 <Footer />

  </div>
}
