import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Details from "../components/Details";

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </ul>
    </nav>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <div className={styles.page}>
        <main className={styles.welcome}>
          <section>
            <h1>Chala secondary</h1>
            <h1>Taita Taveta County</h1>
          </section>
          <section></section>
        </main>

        <Details />
      </div>
    </>
  );
}
