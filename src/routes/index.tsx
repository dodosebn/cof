import { createFileRoute } from '@tanstack/react-router'
import Header from '../components/header';
import ImgShowComp from '../components/imgShow';
import About from '@/components/about';
import Testimonaires from '@/components/testimonaires';
import HelpInt from '@/components/helpInt';
import Footer from '@/components/footer';

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="text-center">
      <header className='overflow-x-hidden h-screen'>
        <Header />
       <ImgShowComp />
       <About />
       <Testimonaires />
       <HelpInt />
             <Footer />

      </header>
    </div>
  )
}
