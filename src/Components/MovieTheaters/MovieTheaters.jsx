import heThongRap from "../../Pages/HomePage/hethongrap.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import styles from "./styles.module.scss";
import MovieTheater from "./MovieTheater";
import { useState } from "react";

const MovieTheaters = () => {
   const newHeThongRap = [...heThongRap.content];
   const [activeId, setActiveId] = useState();

   const handleClick = (movieTheaterId) => {
      setActiveId(movieTheaterId);
      console.log(movieTheaterId);
   };

   return (
      <div className={styles.movieTheaters}>
         <div className={styles.container}>
            <Swiper
               breakpoints={{
                  0: {
                     slidesPerView: `${newHeThongRap.length - 2}` * 1,
                  },
                  380: {
                     slidesPerView: `${newHeThongRap.length - 1}` * 1,
                  },
                  460: {
                     slidesPerView: `${newHeThongRap.length}` * 1,
                  },
                  500: {
                     slidesPerView: `${newHeThongRap.length + 1}` * 1,
                  },
               }}
               spaceBetween={2}
               speed={300}
               navigation={true}
               modules={[Navigation]}
               className="movieTheaters-slide"
            >
               <SwiperSlide className="movieTheaters-item">
                  <MovieTheater
                     logo="../images/dexuat-icon.svg"
                     maHeThongRap="Tất cả"
                     setActive={handleClick}
                     isActive={"Tất cả" === activeId || !activeId}
                  />
               </SwiperSlide>
               {newHeThongRap.map((item, index) => (
                  <SwiperSlide key={index} className="movieTheaters-item">
                     <MovieTheater
                        logo={item.logo}
                        maHeThongRap={item.maHeThongRap}
                        isActive={activeId === item.maHeThongRap}
                        setActive={handleClick}
                     />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   );
};

export default MovieTheaters;
