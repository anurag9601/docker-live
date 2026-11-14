import styles from "./Logo.module.css";

interface I {
  height: number;
  width: number;
}
function Logo(props: I) {
  return (
    <div style={{ height: props.height, width: props.width }} className={styles.logoContainer}>
      🐬 <p className={styles.logoText}>Docker-Live</p>
    </div>
  );
}

export default Logo;
