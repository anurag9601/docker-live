import styles from "./Authorization.module.css"

function Authorization() {
  return (
    <div className={styles.authorizationContainer}>
      <button className={styles.authorizationBtn}>Connect your github</button>
    </div>
  );
}

export default Authorization;
