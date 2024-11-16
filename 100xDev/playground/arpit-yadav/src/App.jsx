import { useState } from 'react'
import thumb from './assets/thumb.png'
import viteLogo from '/vite.svg'
import './App.css'
import { Cards } from './components/Cards'

function App() {

  return (
    <div className='md:flex justify-around'>
      <div>
        <Cards title="RD Services" desc="We provide the fast and latent version of RD services for the devices of every reputed biometric company from Mantra to Secugen." img={thumb} ifReg={true} />
      </div>
      <div>
        <Cards title="RD Services" desc="We provide the fast and latent version of RD services for the devices of every reputed biometric company from Mantra to Secugen." img={thumb} ifReg={true} />
      </div>
      <div>
        <Cards title="RD Services" desc="We provide the fast and latent version of RD services for the devices of every reputed biometric company from Mantra to Secugen." img={thumb} ifReg={true} />
      </div>
    </div>
  )
}

export default App
