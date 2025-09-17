import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AddPage from './Pages/AddPage'
import ViewPage from './Pages/ViewPage'
import Navbar from './Components/navbar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />   {/* default */}
        <Route path="/addpage" element={<AddPage />} />
        <Route path="/viewpage" element={<ViewPage />} />
      </Routes>

    </>
  )
}

export default App
