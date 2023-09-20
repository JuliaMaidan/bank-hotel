import styles from "./caption.module.scss";
import Year from "../Year/Year";
import { GoChevronDown } from "react-icons/go";

const Caption = () => {
  return (
    <section className={styles.caption} id="home">
      <div>
        <h1 className={styles.caption__name}>
          Bank<span className={styles.caption__name_bright}>Hotel</span>
        </h1>
        <ul className={styles.caption__list}>
          <li className={styles.caption__item}>Rooms</li>
          <li className={styles.caption__item}> Restaurant</li>
          <li className={styles.caption__item}> Conference hall</li>
          <li className={styles.caption__item}> Wine bar</li>
        </ul>
      </div>
      <div className={styles.caption__box}>
        <div className={styles.caption__box_btn}>
          <Year />
          <button className={styles.caption__btn}>
            <GoChevronDown className={styles.caption__btn_icon} size={26} />
          </button>
        </div>
        <p className={styles.caption__text}>
          The luxurious hotel in the most beautiful European city with an
          exclusive restaurant, conference-hall, and art-bar.
        </p>
      </div>
    </section>
  );
};

export default Caption;
