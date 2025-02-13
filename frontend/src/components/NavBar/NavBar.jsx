// imports
import styles from './NavBar.module.css';

import React from 'react'
import { Link } from 'react-router'; 

const NavBar = () => {
  return (
    <div className = {`${styles['navBar']}`}  >
        <h1>BlackOut Pirates</h1>
        <nav>
            <ul className={`${styles['navBar-links']}`} >
                <li>
                  <Link to="/" className={`${styles['navBar-link']}`}>Home</Link>
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