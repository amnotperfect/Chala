import styles from "../styles/Layout.module.css";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className={styles.page}>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="whitesmoke" />
        <meta
          name="description"
          content="Welcome to Chala secondary "
        />
        <title>Chala secondary</title>
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
