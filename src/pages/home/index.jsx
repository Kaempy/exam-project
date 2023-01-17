import styles from "./home.module.css";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { state } = useAuth();
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
        {state.user ? (
          <>
            <div style={{ textAlign: "center" }}>
              <h2>{state.name}</h2>
              <p>{state.email}</p>
              <br />
              <img
                src={state.profilePic}
                alt="profile pic"
                title={state.name}
                style={{ borderRadius: "50%" }}
              />
            </div>
          </>
        ) : (
          <h1>Welcome on Board!</h1>
        )}
      </main>
    </>
  );
};

export default Home;
