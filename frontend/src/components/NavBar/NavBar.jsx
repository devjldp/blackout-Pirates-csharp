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
                  <Link to="/">Home</Link>
                </li>
                
                <li>
                  <Link to="band">The Band</Link>
                </li>
                <li>
                  <Link to="worldtour">World tour</Link>
                </li>
                <li>
                  <Link to="shop">Shop</Link>
                </li>
                <li>
                  <Link to="blog">Blog</Link>
                </li>
                <li>
                  <Link to="login">LogIn</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}


export default NavBar;