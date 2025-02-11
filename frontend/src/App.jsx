import { useState } from 'react'
// import styles
import './App.css'


// imnport components
import  NavBar  from './components/NavBar/NavBar.jsx'

function App() {


  return (
    <div id='backgorund-color'>
      <header>
        <NavBar />
      </header>
      <main>
        <img src="./public/assets/images/mainImage.webp" alt="Band main image" id='main-image'/>
        
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default App
