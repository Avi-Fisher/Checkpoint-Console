import { useState } from 'react'
import './App.css'
import LogIn from './componentos/LogIn/LogIn'
import { TokenProvide } from './context/ToknProvide'
import Status from './componentos/status/Status'

function App() {


  return (
    <>
      <TokenProvide>
        <Status />
        <LogIn></LogIn>

      </TokenProvide>
    </>
  )
}

export default App
