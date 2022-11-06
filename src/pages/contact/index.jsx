import styles from "./contact.module.css";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact</title>
        <meta
          name="description"
          content="Welcome! to my contact page. &nbsp; Need A beautiful website design? Hire Me &hearts;"
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <main className={styles["contact-container"]}>
      <address>
        <h3>Contact Me</h3>
        <small>campa.banj@gmail.com</small>
        <small>+234 706 3700 760</small>
      </address>
      <address>
        <h3>Follow Me</h3>
        <small>campa.banj@gmail.com</small>
        <small>+234 706 3700 760</small>
      </address>
    </main>
    </>
  );
};

export default Contact;
