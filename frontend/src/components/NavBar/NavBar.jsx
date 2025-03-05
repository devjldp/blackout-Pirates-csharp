// imports
import styles from './NavBar.module.css';

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'; 

const NavBar = () => {
  const [heightNavbar, setHeightNavbar] = useState(0);

  useEffect(() => {
    const height = document.getElementById('navBar').offsetHeight;
    setHeightNavbar(height);
    // console.log('Navbar height:', height);
  }, []);

  return (
    <div className = {`${styles['navBar']}`} id='navBar' >
        <h1>BlackOut Pirates</h1>
        <nav>
            <ul className={`${styles['navBar-links']}`} >
                <li>
                  <Link to="/" state={{ test: heightNavbar }} className={`${styles['navBar-link']}`}>Home</Link>
                </li>
                
                <li>
                  <Link to="/band" className={`${styles['navBar-link']}`}>The Band</Link>
                </li>
                <li>
                  <Link to="/worldtour" className={`${styles['navBar-link']}`}>World tour</Link>
                </li>
                <li>
                  <Link to="/shop" className={`${styles['navBar-link']}`}>Shop</Link>
                </li>
                <li>
                  <Link to="/blog" className={`${styles['navBar-link']}`}>Blog</Link>
                </li>
                <li>
                  <Link to="/login" className={`${styles['navBar-link']}`}>LogIn</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}


export default NavBar;