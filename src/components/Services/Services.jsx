import { useState } from "react";
// import AOS from "aos";
import { TbArrowMoveRight } from "react-icons/tb";
import { TbArrowMoveUp } from "react-icons/tb";

import restaurant from "../../images/services/restaurant_small.jpg";
import restBig from "../../images/services/restaurant.jpg";
import hallBig from "../../images/services/conference.jpg";
import barBig from "../../images/services/bar.jpg";
import hall from "../../images/services/conference_small.jpg";
import bar from "../../images/services/bar_small.jpg";

import styles from "./services.module.scss";

import { AnimatePresence, motion } from "framer-motion";

const Services = () => {
  const [items, setItems] = useState([
    {
      isShownInfo: false,
      imgSrc: restaurant,
      number: "01",
      itemName: "Ice restaurant",
      imgBigSrc: restBig,
      text: "The hotel’s exclusive infrastructure is complemented by the unique atmosphere of the Safe Restaurant. Author’s menu, extensive wine card, and live music will set you for the correct mood.",
    },
    {
      isShownInfo: false,
      imgSrc: hall,
      number: "02",
      itemName: "Conference hall",
      imgBigSrc: hallBig,
      text: "Our conference hall is equipped with state-of-the-art amenities, making it the ideal venue for your business gatherings. With flexible seating arrangements, cutting-edge technology, and impeccable service, we ensure a productive and memorable event.",
    },
    {
      isShownInfo: false,
      imgSrc: bar,
      number: "03",
      itemName: 'Wine bar "reserve"',
      imgBigSrc: barBig,
      text: "Indulge in the hotel's inviting bar, where a wide range of alcoholic beverages awaits. Our expert mixologists craft signature cocktails, and the cozy ambiance provides the perfect backdrop for a relaxing evening with friends or colleagues.",
    },
  ]);

  function toggle(index) {
    const updatedItems = [...items];
    updatedItems[index].isShownInfo = !updatedItems[index].isShownInfo;
    setItems(updatedItems);
  }

  return (
    <div className={styles.services} id="restaurant">
      <ul className={styles.services__list}>
        {items.map((item, index) => (
          <li className={styles.services__item} key={index}>
            <AnimatePresence>
              {!item.isShownInfo && (
                <motion.div
                  className={styles.services__item_box}
                  initial={{ x: -100, opacity: 0.5 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 0.4 }}
                >
                  <img
                    className={styles.services__item_img}
                    src={item.imgSrc}
                    alt={item.itemName}
                  />
                  <p className={styles.services__item_number}>{item.number}</p>
                  <p className={styles.services__item_name}>{item.itemName}</p>
                  <button
                    className={styles.services__item_btn}
                    onClick={() => toggle(index)}
                  >
                    <TbArrowMoveRight className={styles.services__item_svg} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {item.isShownInfo && (
                <motion.div
                  key={index}
                  className={styles.services__fullsize}
                  initial={{ x: 100, opacity: 0.5 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ ease: "easeIn", duration: 0.5 }}
                >
                  <button
                    className={styles.services__fullsize_btn}
                    onClick={() => toggle(index)}
                  >
                    <TbArrowMoveUp className={styles.services__fullsize_svg} />
                  </button>
                  <div className={styles.services__fullsize_box}>
                    <p className={styles.services__fullsize_number}>
                      {item.number}
                    </p>
                    <p className={styles.services__fullsize_name}>
                      {item.itemName}
                    </p>
                    <p className={styles.services__fullsize_text}>
                      {item.text}
                    </p>
                  </div>
                  <img
                    className={styles.services__fullsize_img}
                    src={item.imgBigSrc}
                    alt=""
                    width="300px"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            {/* </AnimatePresence> */}
          </li>
        ))}
      </ul>
    </div>
  );

  //   const [isShownInfo, setIsShownInfo] = useState(false);

  //   function toggle() {
  //     setIsShownInfo(!isShownInfo);
  //   }

  //   return (
  //     <div className={styles.services}>
  //       <ul className={styles.services__list}>
  //         <li className={styles.services__item}>
  //           {!isShownInfo ? (
  //             <div className={styles.services__item_box}>
  //               <img
  //                 className={styles.services__item_img}
  //                 src={restaurant}
  //                 alt=""
  //                 width="200px"
  //               />
  //               <p className={styles.services__item_number}>01</p>
  //               <p className={styles.services__item_name}>Ice restaurant</p>
  //               <button className={styles.services__item_btn} onClick={toggle}>
  //                 <TbArrowMoveRight className={styles.services__item_svg} />
  //               </button>
  //             </div>
  //           ) : (
  //             <div className={styles.services__fullsize}>
  //               <button
  //                 className={styles.services__fullsize_btn}
  //                 onClick={toggle}
  //               >
  //                 <TbArrowMoveUp className={styles.services__fullsize_svg} />
  //               </button>
  //               <div className={styles.services__fullsize_box}>
  //                 <p className={styles.services__fullsize_number}>01</p>
  //                 <p className={styles.services__fullsize_name}>Ice restaurant</p>
  //                 <p className={styles.services__fullsize_text}>
  //                   The hotel’s exclusive infrastructure is complemented by the
  //                   unique atmosphere of the Safe Restaurant. Author’s menu,
  //                   extensive wine card, and live music will set you for the
  //                   correct mood.
  //                 </p>
  //               </div>
  //               <img
  //                 className={styles.services__fullsize_img}
  //                 src={restBig}
  //                 alt=""
  //                 width="300px"
  //               />
  //             </div>
  //           )}
  //         </li>
  //         <li className={styles.services__item}>
  //           {!isShownInfo ? (
  //             <div className={styles.services__item_box}>
  //               <img
  //                 className={styles.services__item_img}
  //                 src={hall}
  //                 alt=""
  //                 width="200px"
  //               />
  //               <p className={styles.services__item_number}>02</p>
  //               <p className={styles.services__item_name}>conference hall</p>
  //               <button className={styles.services__item_btn} onClick={toggle}>
  //                 <TbArrowMoveRight className={styles.services__item_svg} />
  //               </button>
  //             </div>
  //           ) : (
  //             <div>
  //               <button onClick={toggle}>
  //                 <TbArrowMoveRight />
  //               </button>
  //               <p>02</p>
  //               <p>conference hall</p>
  //               <p>
  //                 The hotel’s exclusive infrastructure is complemented by the
  //                 unique atmosphere of the Safe Restaurant. Author’s menu,
  //                 extensive wine card, and live music will set you for the correct
  //                 mood.
  //               </p>
  //               <img src={restBig} alt="" width="300px" />
  //             </div>
  //           )}
  //         </li>
  //         <li className={styles.services__item}>
  //           <div className={styles.services__item_box}>
  //             <img
  //               className={styles.services__item_img}
  //               src={bar}
  //               alt=""
  //               width="200px"
  //             />
  //             <p className={styles.services__item_number}>03</p>
  //             <p className={styles.services__item_name}>Wine bar “reserve”</p>
  //             <button className={styles.services__item_btn} onClick={toggle}>
  //               <TbArrowMoveRight className={styles.services__item_svg} />
  //             </button>
  //           </div>
  //         </li>
  //       </ul>
  //     </div>
  //   );
};

export default Services;
