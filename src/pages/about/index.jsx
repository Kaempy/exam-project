import { Helmet } from "react-helmet-async";
import styles from "./about.module.css";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta
          name="description"
          content="Welcome! to my about page. &nbsp; Get to know me"
        />
        <link rel="canonical" href="/about" />
      </Helmet>
      <main className={styles["about-container"]}>
        <div>
          <h2>About Me</h2>
          <span className={styles.line}></span>
        </div>
        <div className={styles["about-wrapper"]}>
          <p>
            Am a Frontend Engineer passionate about what I do, philomath and I'm
            always eager to help others grow, and share my experience with the
            world 'coz for me I believe that we all are part of something big.
            <br />
            My hobbies includes a variety of different fun things ranging from
            games to coding to cooking and I love to take some time
            off from everything and meditate.
          </p>
        </div>
      </main>
    </>
  );
};

export default About;
