import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import Like from './pages/Like'
const App = () => {
  return (
    <div>
      <div>
        <div>
        <Navbar/>
        </div>
        <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/like" element={<Like/>}/>
        </Routes>
        </div>
      </div>
    </div>
  )
}

export default App