import React from "react";
import { Search } from "lucide-react";
import { User } from "lucide-react";
import styles from "../styles/Header.module.css";
import { Link } from 'react-router-dom';
import Cart from './Cart.jsx'


function Header() {
  return (
    <div className={styles.shopHeader}>
        <div className={styles.logo}>
          <Link to="/">
            BEAUTYSHOP!
          </Link>
        </div>
      <div className={styles.userIcons}>
        <Link to="/checkout">
          <Cart></Cart>
        </Link>
      </div>
      <div className={styles.searchBar}>
        <input placeholder='Procurar produtos...'></input>
        <Search strokeWidth={4} color='var(--theme)' />
      </div>
    </div>
  );
}

export default Header;
