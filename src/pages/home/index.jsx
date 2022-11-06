import styles from "./home.module.css";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { handleSignIn, handleSignOut, isAuth } = useAuth();
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Welcome! to the hompage of my assignment project"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <main className={styles["home-container"]}>
        <div className={styles["img-wrapper"]}>
          <img
            src="/assets/images/profile.jpeg"
            alt="profile"
            title="Ademary"
            width={"100%"}
            height={"100%"}
            className={styles.img}
          />
        </div>
        <div className={styles["bio-container"]}>
          <address className={styles.address}>
            <small>campa.banj@gmail.com</small>
            <small>+234 706 3700 760</small>
          </address>
          <h1>Adebanjo Mary</h1>
          <p>Front-end developer</p>
          <span className={styles.line}></span>
          {isAuth ? (
            <button className={styles["signin-btn"]} onClick={handleSignOut}>
              <small>Sign out</small>
            </button>
          ) : (
            <button className={styles["signin-btn"]} onClick={handleSignIn}>
              <img
                src="../../../public/assets/icons/google-icon.svg"
                alt="sign in with google"
                title="sign in with google"
              />
              <small>Sign in with google</small>
            </button>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
