import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";

function PopUpMenu() {
  return (
    <div className={styles.popUpMenu}>
      <li>
        <Link href="/Departments">Departments</Link>
      </li>
      <li>
        <Link href="Management">Management</Link>
      </li>
    </div>
  );
}

function Nav() {
  const [sideMenu, setSideMenu] = useState(false);
  return (
    <nav className={styles.nav}>
      <ul>
        <li style={{ position: "relative" }}>
          <span onClick={(e) => setSideMenu(!sideMenu)}>About us</span>
        </li>
        <li>
          <Link href="/History">History</Link>
        </li>
        <li>
          <Link href="/Gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/ContactUs">Contact Us</Link>
        </li>
        {sideMenu && <PopUpMenu />}
      </ul>
    </nav>
  );
}

export default Nav;
