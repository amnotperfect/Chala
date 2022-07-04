import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Details from "../components/Details";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function OurInfo() {
  return (
    <div className={styles.ourInfo}>
      <section></section>
      <section>
        <li>
          <b>MOTTO </b>
          <br />
          ELIMU NI MWANGAZA
        </li>
        <li>
          <b>VISION </b>
          <br />
          To convert the school to a center of academic excellence
        </li>
        <li>
          <b>MISSION </b> <br />
          To anable students realize their potential through <br />
          identification & development of individuals talents
        </li>
      </section>
    </div>
  );
}

function Tittle({ tittle }) {
  return (
    <div className={styles.tittle}>
      <h2>{tittle}</h2>
    </div>
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
          <section>
            <Image
              layout="fill"
              style={{ borderRadius: "10px" }}
              src={require("../img/02.jpg").default}
            />
          </section>
        </main>
        <OurInfo />
        <Tittle tittle="About Us" />
        <Details />
        <Footer />
      </div>
    </>
  );
}

//https://github.com/amnotperfect/Chala.git
