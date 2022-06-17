import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.page}>
      <main>{children}</main>
    </div>
  );
};

export default Layout;