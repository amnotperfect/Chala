import "../styles/globals.css";
import Layout from "../components/Layout.js";
import Styles from "../styles/Layout.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
