// Import Library's Hook
import { useState } from "react";

// Import Components
import MovieSchedule from "../../../Components/MovieSchedule";
import MovieTheaters from "../../../Components/MovieTheaters";
import CinemaSelect from "../CinemaSelect";

// Import module css
import styles from "./styles.module.scss";

const ShowTimes = () => {
   const [activeIdParent, setActiveIdParent] = useState();

   const handleSelect = (activeId) => {
      setActiveIdParent(activeId);
   };

   console.log(123);

   return (
      <>
         <div className={styles.showTimes}>
            <div className={styles.container}>
               <div className={styles.title}>
                  <h2>Show times</h2>
               </div>

               <div className={styles.showTimeDetail}>
                  <MovieSchedule
                     rb={{
                        0: { slidesPerView: 3 },
                        330: { slidesPerView: 4 },
                        400: { slidesPerView: 5 },
                        470: {
                           slidesPerView: 6,
                        },
                        560: {
                           slidesPerView: 7,
                        },
                     }}
                  />

                  <MovieTheaters />
                  <div className={styles.cinemaSelectGroup}>
                     <CinemaSelect
                        activeId={0}
                        setActive={handleSelect}
                        isActive={activeIdParent === 0}
                     />
                     <CinemaSelect
                        activeId={1}
                        setActive={handleSelect}
                        isActive={activeIdParent === 1}
                     />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ShowTimes;
