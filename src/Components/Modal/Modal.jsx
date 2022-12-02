// Import CustomHook & utils
import useBodyScroll from "../../hooks/useBodyScroll";

// Import moduel css
import styles from "./styles.module.scss";

const Modal = ({ title, isOpen, onClose, children }) => {
   useBodyScroll(isOpen);

   return (
      <>
         <div className={`${styles.popup} ${isOpen ? `${styles.active}` : ""}`}>
            <div className={styles.modal}>
               <button className={styles.close} onClick={() => onClose()}>
                  <span>X</span>
               </button>
               <div className={styles.header}>
                  <h3>{title}</h3>
               </div>
               <div className={styles.body}>{children}</div>
               <div className={styles.footer}>
                  <button onClick={() => onClose()}>Đóng</button>
               </div>
            </div>
            <div className={styles.overlay}></div>
         </div>
      </>
   );
};

export default Modal;
