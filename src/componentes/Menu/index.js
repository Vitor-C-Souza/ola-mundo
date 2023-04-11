import React from "react";
import styles from "./Menu.module.css";
import MenuLink from "../MenuLink/index.js";

export default function Menu() {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to="/">Inicio</MenuLink>
        <MenuLink to="/SobreMim">Sobre mim</MenuLink>
      </nav>
    </header>
  );
}
