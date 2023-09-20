import styles from "./year.module.scss";
import { GiFlowerStar } from "react-icons/gi";

const Year = () => {
  return (
    <div className={styles.year}>
      <GiFlowerStar className={styles.year__icon} />
      <p className={styles.year__text}>Since 1973</p>
    </div>
  );
};

export default Year;
