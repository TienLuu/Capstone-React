// Import Library's Hook
import { useParams } from "react-router-dom";

// Import CustomHook
import useRequest from "../../hooks/useRequest";

// Import Components
import SeatManagement from "./SeatManagement";
import Ticket from "./Ticket";

// Import module css
import styles from "./styles.module.scss";
import axios from "axios";

const Checkout = () => {
   const { checkoutId } = useParams();
   const { data = [], setData } = useRequest(async () => {
      const { data } = await axios.get(
         "https://62f50939535c0c50e76847d8.mockapi.io/seats"
      );
      return data;
   });

   return (
      <section className={styles.checkout}>
         <div className={styles.main}>
            <SeatManagement seats={data} />
            <Ticket />
         </div>
      </section>
   );
};

export default Checkout;
