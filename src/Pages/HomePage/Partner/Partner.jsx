import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const partners = [
   { name: "galaxycine" },
   { name: "cgv" },
   { name: "bhd" },
   { name: "megags" },
   { name: "zalopay" },
   { name: "vcb" },
   { name: "cinestar" },
   { name: "zalopay" },
   { name: "zalopay" },
];

const Partner = () => {
   return (
      <section className={styles.partner}>
         <div className={styles.container}>
            <div className={styles.title}>
               <h2>
                  <span>Our</span> partner
               </h2>
            </div>
            <div className={styles.partnerList}>
               <Swiper
                  navigation={{
                     prevEl: ".partnerNavigate__prev",
                     nextEl: ".partnerNavigate__next",
                  }}
                  breakpoints={{
                     0: {
                        slidesPerView: 3,
                     },
                     580: {
                        slidesPerView: 5,
                     },
                     780: {
                        slidesPerView: 6,
                     },
                     1024: {
                        slidesPerView: 7,
                        width: 1024,
                     },
                  }}
                  spaceBetween={30}
                  speed={300}
                  modules={[Navigation]}
                  className="partner-slide"
               >
                  {partners.map((item, index) => (
                     <SwiperSlide key={index} className="partner-item">
                        <div className={styles.partnerItem}>
                           <img
                              src={`./images/${item.name}.png`}
                              alt={item.name}
                           />
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
               <div className="partnerNavigate">
                  <span className={`arrowPrev partnerNavigate__prev`}>
                     <KeyboardArrowRightIcon />
                  </span>
                  <span className={`arrowNext partnerNavigate__next`}>
                     <KeyboardArrowRightIcon />
                  </span>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Partner;
