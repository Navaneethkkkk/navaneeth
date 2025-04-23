import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inner from './Components/Inner'
import Usercontext from './Context/Usercontext'

function App() {
  const [user, setuser] = useState("navaneeth");

  return (
    <>
    <Usercontext.Provider value={{user,setuser}}>
      <Inner />
    </Usercontext.Provider>
    </>
  )
}

export default App;
