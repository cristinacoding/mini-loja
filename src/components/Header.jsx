import React from "react";
import { Search } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { User } from "lucide-react";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <div className={styles.shopHeader}>
      <div className={styles.logo}>BEAUTYSHOP!</div>
      <div className={styles.userIcons}>
        <User strokeWidth={3} />
        <ShoppingCart strokeWidth={3} />
      </div>
      <div className={styles.searchBar}>
        <input placeholder='Procurar produtos...'></input>
        <Search strokeWidth={4} color='var(--theme)' />
      </div>
    </div>
  );
}

export default Header;
