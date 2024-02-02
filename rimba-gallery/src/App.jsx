import React from 'react'
import { Routes , Route } from "react-router-dom"
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import Services from './Pages/Services/Services'

function App() {
  return (
    <div>
<Routes>
  < Route path="/" element={<Home/>}/>
  < Route path="/Products" element={<Products/>} />
  < Route path="/Services" element={<Services/>} />

</Routes>
    </div>
  )
}

export default App