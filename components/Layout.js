import styles from "../styles/Layout.module.css";
import Head from "next/head";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className={styles.page}>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="white" />
        <meta name="description" content="Welcome to Chala secondary " />
        <link rel="manifest" href="/manifest.json" />
        <title>Chala secondary</title>
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
