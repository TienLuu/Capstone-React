// Import Library's Components

import Carousel from "../../Layouts/Carousel/Carousel";
import TicketBookingInput from "../../Layouts/TicketBookingInput/TicketBookingInput";
import filmList from "./filmlist.json";
import showtimes from "./showtimes.json";
import FilmList from "../../Layouts/FilmList";
import TicketBooking from "./TicketBooking/TicketBooking";
import News from "./News";

const Home = () => {
   return (
      <div>
         <Carousel />
         <TicketBookingInput
            movies={filmList.content}
            movieDetails={showtimes.content.heThongRapChieu}
         />
         <FilmList />
         <TicketBooking />
         <News />
      </div>
   );
};

export default Home;
