import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GoChevronDown } from "react-icons/go";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./hero.module.scss";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const minDate = new Date();

  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.picker__wrapper}>
        <div className={styles.date__picker}>
          <DatePicker
            selected={checkInDate}
            onChange={handleCheckInDateChange}
            customInput={
              <button className={styles.date__button}>
                <p
                  className={styles.date__text}
                  onClick={() => {
                    setCheckInDate(null);
                    setCheckOutDate(null);
                  }}
                >
                  Check in <span>| </span>
                  {checkInDate ? checkInDate.toDateString() : ""}
                </p>
                <GoChevronDown />
              </button>
            }
            dateFormat="dd/MM/yyyy"
            selectsStart
            startDate={checkInDate}
            endDate={checkOutDate}
            minDate={minDate}
            popperPlacement="bottom-start"
            closeOnScroll={true}
          />
        </div>

        <div className={styles.date__picker}>
          <DatePicker
            selected={checkOutDate}
            onChange={handleCheckOutDateChange}
            customInput={
              <button className={styles.date__button}>
                <p onClick={() => setCheckOutDate(null)}>
                  Check out <span>| </span>
                  {checkOutDate ? checkOutDate.toDateString() : ""}
                </p>
                <GoChevronDown />
              </button>
            }
            dateFormat="dd/MM/yyyy"
            selectsEnd
            startDate={checkInDate}
            endDate={checkOutDate}
            minDate={checkInDate}
            popperPlacement="bottom-start"
            closeOnScroll={true}
          />
        </div>
        <button className={styles.book}>Book Room</button>
      </div>
      <div className={styles.contacts}>
        <div>
          <a className={styles.contacts__number} href="tel:+380322975020">
            +38 032 297 50 20
          </a>
          <a
            className={styles.contacts__location}
            href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%9B%D0%B8%D1%81%D1%82%D0%BE%D0%BF%D0%B0%D0%B4%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE+%D0%A7%D0%B8%D0%BD%D1%83,+8,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.8408756,24.0209446,17z/data=!3m1!4b1!4m6!3m5!1s0x473add71698ec493:0x7100c9b2c7b810d4!8m2!3d49.8408756!4d24.0209446!16s%2Fg%2F11bw4hghr9?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            8 Lystopadovoho Chynu, Lviv
          </a>
        </div>
        <p className={styles.contacts__place}>Art & Congress hall</p>
      </div>
    </section>
  );
};

export default Hero;
