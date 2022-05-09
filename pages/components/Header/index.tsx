import styles from "./styles.module.css";
import LOGO from "../../../public/logo.png";
import Image from "next/image";

function Header(): JSX.Element {
  return (
    <header className={styles.container}>
      <div className={`container ${styles.innerContainer}`}>
        <div className={styles.logoContainer}>
          <Image src={LOGO} width={196} height={24} />
        </div>
        <div>
          <ul className={styles.linkContainer}>
            <li className="h3Header">OUR COMPANY</li>
            <li className="h3Header">LOCATIONS</li>
            <li className="h3Header">CONTACT</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
