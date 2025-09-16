import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import { Signup } from './components/Signup'
import { Home } from './Pages/Home'
import Welcome from './components/Welcome'
import Counter from './Pages/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/counterr' element={<Counter />} />
        

      </Routes>

    </>
  )
}

export default App
