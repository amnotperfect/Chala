import styles from "../styles/Home.module.css";

function Details() {
  return (
    <div className={styles.details}>
      <div className={styles.infoCard}>
        <h1>WHO WE ARE</h1>
        <ul>
          <li>
            <span>DAY/BOARDING :</span>Day and Boarding
          </li>
          <li>
            <span>GENDER :</span> Mixed
          </li>
          <li>
            <span>LEVEL :</span> secondary School
          </li>
          <li>
            <span>OWNERSHIP :</span> Public
          </li>
          <li>
            <span>SPONSOR :</span>ACK
          </li>
          <li>
            <span>STUDENTS NEEDS :</span>Ordinary
          </li>
        </ul>
      </div>

      <div className={styles.infoCard}>
        <h1>OUR LOCATION</h1>
        <ul>
          <li>
            <span>REGION :</span>Coast
          </li>
          <li>
            <span>COUNTY :</span> Taita Taveta
          </li>
          <li>
            <span>SUB COUNTY :</span> Taveta
          </li>
          <li>
            <span>CONSTITUENCY :</span> Teveta
          </li>
          <li>
            <span>DIVISION :</span> Taveta
          </li>
          <li>
            <span>WARD:</span> Chala
          </li>
        </ul>
      </div>
      <div className={styles.infoCard}>
        <h1>OUR STAFF</h1>
        <ul>
          <li>
            <span>TSC MALE TEACHERS :</span>10
          </li>
          <li>
            <span>TSC FEMALE TEACHERS :</span> 7
          </li>
          <li>
            <span>PA/BOM :</span>0
          </li>
          <li>
            <span>NTS FEMALE :</span>9
          </li>
          <li>
            <span>NTS FEMALE:</span>7
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Details;
