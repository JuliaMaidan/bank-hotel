import { motion } from "framer-motion";
import Navigation from "../Header/Navigation";
import styles from "./mobileMenu.module.scss";

const MobileMenu = ({ menuOpen, toggleMenu }) => {
  const closeMenu = () => {
    toggleMenu();
  };

  return (
    <motion.div
      className={styles.menu}
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      mode="wait"
      transition={{ ease: "easeIn", duration: 0.5 }}
    >
      <div className={styles.menu__box}>
        <Navigation onClose={closeMenu} />
        <a className={styles.menu__phone} href="tel:+380322975020">
          +38 032 297 50 20
        </a>
        <a
          className={styles.menu__address}
          href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%9B%D0%B8%D1%81%D1%82%D0%BE%D0%BF%D0%B0%D0%B4%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE+%D0%A7%D0%B8%D0%BD%D1%83,+8,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.8408756,24.0209446,17z/data=!3m1!4b1!4m6!3m5!1s0x473add71698ec493:0x7100c9b2c7b810d4!8m2!3d49.8408756!4d24.0209446!16s%2Fg%2F11bw4hghr9?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
        >
          8 Lystopadovoho Chynu, Lviv
        </a>
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <a
              className={styles.menu__link}
              href="https://uk-ua.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li className={styles.menu__item}>
            <a
              className={styles.menu__link}
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li className={styles.menu__item}>
            <a
              className={styles.menu__link}
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              twitter
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
