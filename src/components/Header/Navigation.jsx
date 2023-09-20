import { Link } from "react-scroll";
import styles from "./navigation.module.scss";

const Navigation = ({ onClose }) => {
  return (
    <nav className={styles.nav}>
      <Link
        className={styles.nav__link}
        to="home"
        smooth={true}
        duration={500}
        onClick={onClose}
      >
        Home
      </Link>
      <Link
        className={styles.nav__link}
        to="about"
        smooth={true}
        duration={500}
        onClick={onClose}
        href="/"
      >
        About
      </Link>
      <Link
        className={styles.nav__link}
        to="rooms"
        smooth={true}
        duration={500}
        onClick={onClose}
      >
        Rooms
      </Link>
      <Link
        className={styles.nav__link}
        to="facilities"
        smooth={true}
        duration={500}
        onClick={onClose}
      >
        Facilities
      </Link>
      <Link
        className={styles.nav__link}
        to="restaurant"
        smooth={true}
        duration={500}
        onClick={onClose}
      >
        Restaurant
      </Link>
      <Link
        className={styles.nav__link}
        to="contacts"
        smooth={true}
        duration={500}
        onClick={onClose}
      >
        Contacts
      </Link>
    </nav>
  );
};
export default Navigation;
