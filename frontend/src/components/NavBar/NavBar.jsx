import styles from './NavBar.module.css';

import React from 'react'

const NavBar = () => {
  return (
    <div className = {`${styles['navBar']}`}  >
        <h1>BlackOut Pirates</h1>
        <nav>
            <ul className={`${styles['navBar-links']}`} >
                <li>Home</li>
                <li>The Band</li>
                <li>World tour</li>
                <li>Shop</li>
                <li>Blog</li>
                <li>LogIn</li>
            </ul>
        </nav>
    
    
    </div>
  )
}


export default NavBar;