import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Details from "../components/Details";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Link from "next/link";
import { useState } from "react";

function OurInfo() {
  return (
    <div className={styles.ourInfo}>
      <section></section>
      <section>
        <li>
          <b>MOTTO </b>
          <br />
          <p>ELIMU NI MWANGAZA</p>
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
  const [displayImage, setDisplayImage] = useState("06");

  setInterval((e) => {
    if (displayImage === "09") {
      setDisplayImage("11");
    } else {
      setDisplayImage("09");
    }
  }, 30000);
  return (
    <>
      <Nav />
      <div className={styles.page}>
        <main className={styles.welcome}>
          <section>
            <Image
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: "0px" }}
              src={require(`../img/${displayImage}.jpg`).default}
            />
          </section>
          <section>
            <h1>Chala secondary</h1>
            <h1>Taita Taveta County</h1>
          </section>
        </main>
        <div className={styles.contactBtn}>
          <button>
            <Link href="/ContactUs">ContactUs</Link>
          </button>
        </div>
        <OurInfo />
        <Tittle tittle="About Us 	&#187;" />
        <Details />
        <Footer />
      </div>
    </>
  );
}

//https://github.com/amnotperfect/Chala.git
