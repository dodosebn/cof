import { createFileRoute } from '@tanstack/react-router'
import Header from '../components/header';
import ImgShowComp from '../components/imgShow';

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="text-center">
      <header className='overflow-x-hidden'>
        <Header />
       <ImgShowComp />
      </header>
    </div>
  )
}
