import styles from "../styles/Home.module.css";
import Link from "next/link";
import { MdKeyboardBackspace } from "react-icons/md";

const Header = ({ header }) => {
  const arrowStyle = {
    fontSize: "25px",
    border: "0px solid grey",
    borderRadius: "0%",
    padding: "0px",
    margin:'0px 15px'
  };
  return (
    <div className={styles.header}>
      <h1>{header}</h1>
      <span>
        <Link href="/">
          <MdKeyboardBackspace style={arrowStyle} />
        </Link>
      </span>
    </div>
  );
};

export default Header;
