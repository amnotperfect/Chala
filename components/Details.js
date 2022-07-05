import styles from "../styles/Home.module.css";

function Details() {
  return (
    <div className={styles.details}>
      <div className={styles.infoCard}>
        <h1>Our School</h1>
        <ul>
          <li>
            <span>Day/Boarding :</span>Day and Boarding
          </li>
          <li>
            <span>Gender :</span> Mixed
          </li>
          <li>
            <span>Level :</span> secondary School
          </li>
          <li>
            <span>Ownership :</span> Public
          </li>
          <li>
            <span>Sponsor:</span>ACK
          </li>
          <li>
            <span>Student needs :</span>Ordinary
          </li>
        </ul>
      </div>

      <div className={styles.infoCard}>
        <h1>Our Location</h1>
        <ul>
          <li>
            <span>Region :</span>Coast
          </li>
          <li>
            <span>County :</span> Taita Taveta
          </li>
          <li>
            <span>Sub County :</span> Taveta
          </li>
          <li>
            <span>Constituency :</span> Teveta
          </li>
          <li>
            <span>Division :</span> Taveta
          </li>
          <li>
            <span>Ward:</span> Chala
          </li>
        </ul>
      </div>
      <div className={styles.infoCard}>
        <h1>Our Staff</h1>
        <ul>
          <li>
            <span>TSC Male Teachers :</span>10
          </li>
          <li>
            <span>TSC Female Teachers :</span> 7
          </li>
          <li>
            <span>PA/BOM :</span>0
          </li>
          <li>
            <span>NTS Male :</span>9
          </li>
          <li>
            <span>NTS Female:</span>7
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Details;
