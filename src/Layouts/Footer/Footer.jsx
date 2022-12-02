import Container from "@mui/material/Container";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import styles from "./styles.module.scss";

const Footer = () => {
   return (
      <footer>
         <Container maxWidth="xl">
            <div className={styles.wrapper}>
               <div className={styles.main}>
                  <div className={`${styles.footerItem} ${styles.contact}`}>
                     <h2>
                        <a href="#1">
                           <strong>watch</strong>trailer
                        </a>
                     </h2>
                     <ul>
                        <li>
                           Address:
                           <a href="#1">
                              112 Cao Thang, Q.3, TP.Ho Chi Minh, Viet Nam.
                           </a>
                        </li>
                        <li>
                           Phone:
                           <a href="#1">+84931449394</a>
                        </li>
                        <li>
                           E-mail:
                           <a href="#1">tienluu1301@gmail.com</a>
                        </li>
                     </ul>
                  </div>
                  <div className={styles.footerItem}>
                     <h2>QUICK LINKS</h2>
                     <ul>
                        <li>
                           <a href="#1">Movie Schedule</a>
                        </li>
                        <li>
                           <a href="#1">Movie Schedule</a>
                        </li>
                        <li>
                           <a href="#1">Movie Schedule</a>
                        </li>
                        <li>
                           <a href="#1">Movie Schedule</a>
                        </li>
                     </ul>
                  </div>
                  <div className={styles.footerItem}>
                     <h2>ACCOUNT</h2>
                     <ul>
                        <li>
                           <a href="#1">My Account</a>
                        </li>
                        <li>
                           <a href="#1">My Account</a>
                        </li>
                        <li>
                           <a href="#1">My Account</a>
                        </li>
                        <li>
                           <a href="#1">My Account</a>
                        </li>
                     </ul>
                  </div>
                  <div className={`${styles.footerItem} ${styles.download}`}>
                     <h2>GET YOUR APP NOW</h2>
                     <p>Dowload App And Get Free Movie Ticket !</p>
                     <div className={styles.downloadIcon}>
                        <div>
                           <a href="#11">
                              <img src="../images/app-1.jpg" alt="Android" />
                           </a>
                        </div>
                        <div>
                           <a href="#1">
                              <img src="../images/app-2.jpg" alt="IOS" />
                           </a>
                        </div>
                     </div>
                     <p className={styles.discount}>
                        <span>10%</span> Payback On App Download
                     </p>
                  </div>
               </div>
               <div className={styles.copyright}>
                  <p>
                     Copyright © WatchTrailer. All Right Reserved - Design By
                     <span>TienLuu</span>
                  </p>
                  <ul className={styles.socialMedia}>
                     <li className={styles.facebook}>
                        <a href="#1">
                           <FacebookIcon />
                        </a>
                     </li>
                     <li className={styles.pinterest}>
                        <a href="#1">
                           <PinterestIcon />
                        </a>
                     </li>
                     <li className={styles.twitter}>
                        <a href="#1">
                           <TwitterIcon />
                        </a>
                     </li>
                     <li className={styles.google}>
                        <a href="#1">
                           <GoogleIcon />
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </Container>
      </footer>
   );
};

export default Footer;
