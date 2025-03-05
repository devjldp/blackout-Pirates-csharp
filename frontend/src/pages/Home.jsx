import React, { useEffect } from 'react'
// Link for the href to World tour
import { Link, useParams, useLocation } from 'react-router'; 

// import to access data send form navbar

const Home = () => {
  

  

  return (
 <div id='main-home'>
    <div id='main-image'>
      <div id='home-headers'>
        <h1 className="main-header">BlackOut Pirates</h1>
        <h3 className='subheader'>☠️ Embrace the pirate life! ☠️</h3>
      </div>

      <Link to='/worldtour' id='home-button'>World Tour 2025</Link>


    </div>
 </div>
  )
}

export default Home;