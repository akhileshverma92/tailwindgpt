import React from 'react'
import Home from './Home'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Tailwind from './Tailwind'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tailwindgpt' element={<Tailwind/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App