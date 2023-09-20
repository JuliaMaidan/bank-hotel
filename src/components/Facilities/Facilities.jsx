import { GiFlowerStar } from "react-icons/gi";
import styles from "./facilities.module.scss";
import Services from "../Services/Services";

const Facilities = () => {
  return (
    <section className={styles.facilities} id="facilities">
      <div className={styles.facilities__wrapper}>
        <p className={styles.facilities__name}>Art & Congress hall</p>
        <div className={styles.caption}>
          <p className={styles.caption__our}>Our</p>
          <p className={styles.caption__faci}>Faci</p>
          <GiFlowerStar className={styles.caption__svg} />
          <p className={styles.caption__lities}>lities</p>
          <p className={styles.caption__desc}>
            Bank Hotel offers you a wide range of additional services and
            facilities. Visit our restaurant to try exclusive meals, book a
            conference hall to organize a business meeting, or relax in the
            art-bar.
          </p>
        </div>
      </div>
      <Services />
    </section>
  );
};

export default Facilities;
