import { createFileRoute } from '@tanstack/react-router'
import logo from '../logo.svg'
import ImgShowComp from '@/components/imgShow'
import Header from '@/components/Header'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="text-center">
      <header>
        <Header />
       <ImgShowComp />
      </header>
    </div>
  )
}
