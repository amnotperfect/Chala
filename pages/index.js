import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Hey it Works</h1>
      <main className={styles.welcome}></main>
    </div>
  );
}
