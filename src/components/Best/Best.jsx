import styles from "./best.module.scss";

const Best = () => {
  return (
    <section className={styles.best}>
      <div className={styles.best__box}>
        <p className={styles.best__name}>Best apartments</p>
        <p className={styles.best__text}>
          All room decoration was made with ecological certified and safe
          materials.
        </p>
      </div>
    </section>
  );
};

export default Best;
