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
import Buttonpage from './Pages/Buttonpage'
import CardPage from './components/CardPage'
import Productspage from './Pages/Productspage'


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
        <Route path='/buttonpage' element={<Buttonpage />} />
        <Route path='/cardpage' element={<CardPage />}/>
        <Route path='/productpage' element={<Productspage />}/>




      </Routes>

    </>
  )
}

export default App
