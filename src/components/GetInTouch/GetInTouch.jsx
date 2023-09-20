import { GiFlowerStar } from "react-icons/gi";
import styles from "./getInTouch.module.scss";

const GetInTouch = () => {
  return (
    <section className={styles.contacts} id="contacts">
      <div className={styles.contacts__box}>
        <a className={styles.contacts__phone} href="tel:+380322975020">
          +38 032 297 50 20
        </a>
        <a
          className={styles.contacts__address}
          href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%9B%D0%B8%D1%81%D1%82%D0%BE%D0%BF%D0%B0%D0%B4%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE+%D0%A7%D0%B8%D0%BD%D1%83,+8,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.8408756,24.0209446,17z/data=!3m1!4b1!4m6!3m5!1s0x473add71698ec493:0x7100c9b2c7b810d4!8m2!3d49.8408756!4d24.0209446!16s%2Fg%2F11bw4hghr9?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
        >
          8 Lystopadovoho Chynu, Lviv
        </a>
        <p className={styles.contacts__get}>Get in</p>
        <GiFlowerStar className={styles.contacts__svg} />
        <p className={styles.contacts__touch}>Touch</p>
      </div>
    </section>
  );
};

export default GetInTouch;
