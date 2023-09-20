import styles from "./about.module.scss";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <p className={styles.about__capt}>
        About <span className={styles.about__capt_bright}>Us</span>
      </p>
      <div className={styles.about__text_box}>
        <p className={styles.about__text}>High quality</p>
        <p className={styles.about__text_desc}>
          The five-star Bank Hotel was reopened to visitors in 2016. The
          building was renovated and modernized to meet the expectations of the
          most demanding guests. We offer luxurious rooms, numerous facilities,
          and exceptional service.
        </p>
      </div>
      {/* <button></button> */}
    </section>
  );
};

export default About;
