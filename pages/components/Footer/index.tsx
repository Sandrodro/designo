import styles from "./styles.module.css";
import LOGO from "../../../public/logoWhite.png";
import Image from "next/image";
import LOGOS from "../../../public/logos.png";

function Footer(): JSX.Element {
  return (
    <footer className={styles.container}>
      <div className={`container ${styles.innerContainer}`}>
        <div className={styles.topDiv}>
          <div className={styles.logoContainer}>
            <Image src={LOGO} width={202} height={27} />
          </div>
          <div>
            <ul className={styles.linkContainer}>
              <li className="h3Header">OUR COMPANY</li>
              <li className="h3Header">LOCATIONS</li>
              <li className="h3Header">CONTACT</li>
            </ul>
          </div>
        </div>
        <div className={styles.bottomDiv}>
          <div className={styles.details}>
            <h4>Designo Central Office</h4>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </div>
          <div className={styles.details}>
            <h4>Contact Us (Central Office) </h4>
            <p>P : +1 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </div>
          <div className={styles.socials}>
            <Image src={LOGOS} width={184} height={24} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
