import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Signup } from './components/Signup'
import { Home } from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>

      </Routes>
      
    </>
  )
}

export default App
