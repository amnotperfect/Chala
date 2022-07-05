import styles from "../styles/ContactUs.module.css";
import Header from "../components/Header";
const ContactUs = () => {
  return (
    <>
      <Header header="Contact Us" />
      <div className={styles.contactUs}>
        <section>
          <div>
            {" "}
            <a href="mailto:chalasecondaryschool@gmail.com">
              <i class="material-icons">Email</i>
            </a>
          </div>
          <div>
            {" "}
            <a href="tel:254708733750">
              <i class="material-icons">Phone</i>
            </a>
          </div>
          <div>
            <a href="sms:254708733750">
              <i class="material-icons">Message</i>
            </a>
          </div>
          <div>
            {" "}
            <a href="">
              <i class="material-icons">facebook</i>
            </a>
          </div>
        </section>
        <div>
          <li>
            <b>Email</b> chalasecondaryschool@gmail.com
          </li>
          <li>
            <b>Phone</b> 0708733750
          </li>
          <li>
            <b>Message</b> 0708733750
          </li>
          <li>
            <b>Facebook</b> Chala Secondary
          </li>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
