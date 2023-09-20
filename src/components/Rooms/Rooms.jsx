import { GiFlowerStar } from "react-icons/gi";
import { TbArrowMoveRight } from "react-icons/tb";
import "aos/dist/aos.css";
import styles from "./rooms.module.scss";

const Rooms = () => {
  return (
    <section className={styles.rooms} id="rooms">
      <div className={styles.rooms__box}>
        <div className={styles.caption}>
          <p className={styles.caption__name}>Rooms & apartments</p>
          <p className={styles.caption__desc}>
            All room decoration was made with ecological certified and safe
            materials.
          </p>
        </div>
        <div className={styles.content}>
          <button data-aos="zoom-in-up" className={styles.content__book}>
            Book room
          </button>
          <button className={styles.content__arrow}>
            <TbArrowMoveRight className={styles.content__arrow_svg} />
          </button>
          <div>
            <div className={styles.year}>
              <GiFlowerStar className={styles.year__icon} />
              <p className={styles.year__text}>Since 1973</p>
            </div>
            <p className={styles.name}>Superior twin</p>
            <p className={styles.text}>
              The Superior twin is perfect for those who plan to stay long. The
              spacious and bright room is equipped with deluxe Italian furniture
              and has a beautiful view to the historical part of the city.
              Stylish interior design and comfortable beds will make your stay
              cozy and pleasant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
