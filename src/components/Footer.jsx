import React from "react";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.shopFooter}>
      <div>
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Produtos</a>
          </li>
          <li>
            <a href='#'>Contacta-nos</a>
          </li>
          <li>
            <a href='#'>Política de Privacidade</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Contacts</h3>
        <ul>
          <li>support@example.com</li>
          <li>+1 123 456 7890</li>
          <li>M1234 Street, City, Country</li>
        </ul>
      </div>
      <div>
        <h3>Developed by</h3>
        <ul>
          <li><a href="https://github.com/cristinacoding" target="_blank">Cristina Grosso</a></li>
          <li><a href="https://github.com/deboraacastroo" target="_blank">Débora Castro</a></li>
          <li><a href="https://github.com/diogoasp97" target="_blank">Diogo Pereira</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
