import styles from "../styles/Home.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>About us </li>
        <li>History</li>
        <li>Gallery</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
}

export default Nav;
