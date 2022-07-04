import Header from "../components/Header";
import styles from "../styles/About.module.css";

const Departments = () => {
  return (
    <div className={styles.aboutPage}>
      <Header header="Departments & Facilities" />
      <section>
        <li>LANGUAGES</li>
        <li>SCIENCE & MATHEMATICS</li>
        <li>HUMANITIES & APPLIED</li>
        <li>CO-CIRRICULAR</li>
        <li>BOARDING</li>
        <li>GUARDING & COUNCELING</li>
      </section>

      <section>
        <h1>FACILITIES</h1>
        <li>
          <b>Adiministration Block</b>
        </li>
        <li>
          <b>Dormitories-Boys and Girls</b>
        </li>
        <li>
          <b>Laboratories-Computer and Science lab</b>
        </li>
        <li>
          <b>Dinning Hall</b>
        </li>
        <li>
          <b>Class roomS- form 1-4</b>
        </li>
        <li>
          <b>Stores & Book room</b>
        </li>
        <li>
          <b>Toilets-Staff and Students</b>
        </li>
        <li>
          <b>Fishpond</b>
        </li>
        <li>
          <b>School Farm</b>
        </li>
        <li>
          <b>School Bus</b>
        </li>
      </section>
    </div>
  );
};

export default Departments;
