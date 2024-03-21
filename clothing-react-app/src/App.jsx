import { useState } from 'react'
import Login from './components/Login'
import OTPVerification from './components/VerifyOtp'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    {/* <Login/> */}
    <OTPVerification />
    
    </>
  )
}

export default App
