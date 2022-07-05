import styles from "../styles/Nav.module.css";
import Link from "next/link";
import { useState } from "react";

function PopUpMenu({ close }) {
  return (
    <div className={styles.popUpMenu}>
      <li>
        <Link href="/Departments">Departments</Link>
      </li>
      <li>
        <Link href="/Departments">Facilities </Link>
      </li>
      <li>
        <Link href="Management">Management</Link>
      </li>

      <span onClick={(e) => close()}>close</span>
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
        {sideMenu && <PopUpMenu close={(e) => setSideMenu(!sideMenu)} />}
      </ul>
    </nav>
  );
}

export default Nav;
