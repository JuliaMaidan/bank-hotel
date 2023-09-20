import Caption from "./Caption/Caption";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Rooms from "./Rooms/Rooms";

import styles from "./app.module.scss";
import Facilities from "./Facilities/Facilities";
import Best from "./Best/Best";
import GetInTouch from "./GetInTouch/GetInTouch";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <div className={styles}>
      <Header />
      <main>
        <Caption data-aos="fade-up" />
        <Hero />
        <About data-aos="fade-up" />
        <Rooms data-aos="fade-up" />
        <Facilities data-aos="fade-up" />
        <Best data-aos="fade-up" />
        <GetInTouch />
        <Footer />
      </main>
    </div>
  );
};

export default App;
