import styles from "./link.module.scss";

const Link = () => {
  return (
    <section className={styles.link}>
      <p className={styles.link__text}>
        Bank hotel <span className={styles.link__active}>Bank__hotel© </span>
        Bank hotel Bank hotel Bank hotel Bank__hotel©
      </p>
    </section>
  );
};

export default Link;
