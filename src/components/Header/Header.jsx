import { useState, useEffect } from "react";
import { TbMenu } from "react-icons/tb";
import { TfiClose } from "react-icons/tfi";
import MobileMenu from "../MobileMenu/MobileMenu";
import Navigation from "./Navigation";
import { AnimatePresence } from "framer-motion";
import styles from "./header.module.scss";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className={styles.header}>
      <a className={styles.header__logo} href="/">
        BankHotel
      </a>
      {windowWidth < 1024 ? (
        <button className={styles.header__menu} onClick={toggleMenu}>
          {!isModalOpen ? (
            <TbMenu className={styles.header__menu_svg} />
          ) : (
            <TfiClose className={styles.header__menu_svg} />
          )}
        </button>
      ) : (
        <>
          <Navigation toggleMenu={toggleMenu} />
          <a className={styles.header__phone} href="tel:+380322975020">
            +38 032 297 50 20
          </a>
        </>
      )}
      <AnimatePresence>
        {isModalOpen && (
          <MobileMenu menuOpen={isModalOpen} toggleMenu={toggleMenu} />
        )}
      </AnimatePresence>
    </header>
  );
};
export default Header;
