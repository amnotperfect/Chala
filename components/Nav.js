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
        <li>Gallery</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
}

export default Nav;
