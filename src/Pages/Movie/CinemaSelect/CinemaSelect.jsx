// Import Library's Hook

// Import Components
import InputSelectCinema from "../../../Components/InputSelectCinema";
import MovieList from "../../../Components/MovieList";

// Import module css
import styles from "./styles.module.scss";

const CinemaSelect = ({ activeId, setActive, isActive }) => {
   return (
      <div className={styles.cinemaSelect}>
         <div
            onClick={() => setActive(activeId)}
            className={styles.inputSelectCinema}
         >
            <InputSelectCinema isIcon={true} />
         </div>
         <div
            className={`${styles.movieList} ${
               isActive ? `${styles.active}` : ""
            }`}
         >
            {isActive ? <MovieList /> : undefined}
         </div>
      </div>
   );
};

export default CinemaSelect;
