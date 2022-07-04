import styles from "../styles/Home.module.css";
import Link from "next/link";

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>About us </li>
        <li>
          <Link href="/History">History</Link>
        </li>
        <li>
          <Link href="/Gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/ContactUs">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
