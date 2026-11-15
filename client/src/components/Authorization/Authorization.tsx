import styles from "./Authorization.module.css";

function Authorization() {
  async function handleGithubAuthentication() {
    const req = await fetch("http://localhost:8000/github/authentication");

    const { url } = await req.json();

    window.location.href = url;
  }
  return (
    <div className={styles.authorizationContainer}>
      <button
        className={styles.authorizationBtn}
        onClick={handleGithubAuthentication}
      >
        Connect your github
      </button>
    </div>
  );
}

export default Authorization;
