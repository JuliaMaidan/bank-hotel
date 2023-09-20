import { TbArrowMoveRight } from "react-icons/tb";

import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__box}>
        <div className={styles.about}>
          <p className={styles.about__name}>
            <span className={styles.about__span}>/</span>about
          </p>
          <p className={styles.about__text}>
            The five-star hotel in a beautiful European city with a modern
            restaurant, conference-hall, and art-bar.
          </p>
          <p className={styles.about__rights}>
            ©2021 All rights reserved. BankHotel
          </p>
        </div>
        <div className={styles.about}>
          <p className={styles.about__name}>
            <span className={styles.about__span}>/</span>news
          </p>
          <p className={styles.about__text}>
            Sign up to our newsletter not to miss exclusive offers and
            information about the upcoming events.
          </p>
          <div className={styles.about__input_box}>
            <input
              className={styles.about__input}
              type="email"
              placeholder="email"
            />
            <button className={styles.about__btn}>
              <TbArrowMoveRight className={styles.about__svg} />
            </button>
          </div>
        </div>
        <div className={styles.about}>
          <p className={styles.about__name}>
            <span className={styles.about__span}>/</span>socials
          </p>
          <ul className={styles.social}>
            <li className={styles.social__item}>
              <a
                className={styles.social__link}
                href="https://uk-ua.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li className={styles.social__item}>
              <a
                className={styles.social__link}
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li className={styles.social__item}>
              <a
                className={styles.social__link}
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
