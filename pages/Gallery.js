import styles from "../styles/Gallery.module.css";
import Image from "next/image";
import Header from "../components/Header";

function ImgCont({ num }) {
  var prevNum = "";
  if (num < 10) {
    prevNum = 0;
  }
  return (
    <div className={styles.imgCont}>
      <Image
        alt="Chala secondary Image"
        layout="fill"
        objectFit="cover"
        src={require(`../img/${prevNum}${num}.jpg`).default}
      />
    </div>
  );
}

function ImgDiv() {
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <div className={styles.imgDiv}>
      {images.map((num) => {
        return <ImgCont num={num} />;
      })}
    </div>
  );
}

const Gallery = () => {
  return (
    <>
      <Header header={"Gallery"} />
      <div className={styles.galleryWelcome}>
        <section>
          <Image
            className={styles.galleryImg}
            layout="fill"
            objectFit="cover"
            src={require("../img/11.jpg").default}
          />
        </section>
        <section>
          <div>
            <Image
              className={styles.galleryImg}
              layout="fill"
              objectFit="cover"
              src={require("../img/06.jpg").default}
            />
          </div>
          <div>
            <Image
              className={styles.galleryImg}
              layout="fill"
              objectFit="cover"
              src={require("../img/10.jpg").default}
            />
          </div>
        </section>
      </div>
      <ImgDiv />
    </>
  );
};

export default Gallery;
