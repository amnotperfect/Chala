import styles from "../styles/ContactUs.module.css";
import Header from "../components/Header";
const ContactUs = () => {
  return (
    <>
      <Header header="Contact Us" />
      <div className={styles.contactUs}>
        <section>
          <div>Facebook</div>
          <div>Whatsapp</div>
          <div>Message</div>
          <div>Email</div>
        </section>
        <div>
          <li>
            <b>Email</b> chalasecondary@gmail.com
          </li>
          <li>
            <b>Phone</b> 070000000
          </li>
          <li>
            <b>Message</b> 070000000
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
