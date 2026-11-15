import Logo from "../Logo/Logo";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <Logo />
    </div>
  );
}

export default Header;
