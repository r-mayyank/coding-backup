import './App.css'
import { FullCard } from './components/FullCard'
import { Footer } from './components/Footer'
import { TopBar } from './components/TopBar'
import { Transactions } from './components/Transactions'
import { Table } from './components/Table'
import { Dashboard } from './components/Dashboard'

function App() {
  return (
    <div className='bg-[#FAFAFA]'>
      <Dashboard />
      <div className='border-b border-[#D9D9D9] sm:pl-64 bg-[#FAFAFA]'>
        <TopBar />
      </div>

      <div className='m-5 mb-0 sm:ml-80 pr-5 grid gap-8'>
        <FullCard />
        <div className='grid gap-6'>
          <Transactions />
          <Table />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
