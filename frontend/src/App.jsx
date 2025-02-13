import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";

// import styles
import './App.css'

// import pages
import Home from "./pages/Home.jsx"
import Band from "./pages/Band.jsx"
import Worldtour from "./pages/Worldtour.jsx"
import Shop from "./pages/Shop.jsx"
import Blog from "./pages/Blog.jsx"
import LogIn from "./pages/LogIn.jsx"



// imnport components
import  NavBar  from './components/NavBar/NavBar.jsx'

function App() {


  return (
    <div id='backgorund-color'>
      <header>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/band' element={<Band />} />
            <Route path='/worldtour' element={<Worldtour />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/login' element={<LogIn/>} />
          </Routes>
        
        </BrowserRouter>
      </header>


      <footer>

      </footer> 
    </div>
  )
}

export default App
