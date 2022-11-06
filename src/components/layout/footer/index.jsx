import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import styles from "./footer.module.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const year = new Date().getFullYear();

  const logoHandler = () => navigate("/");
  return (
    <footer className={styles.footer}>
      <div className={styles["wrapper"]}>
        <p className={styles.logo}>
          Ade<span className={styles["logo-span"]}>mary</span>
        </p>
        <ul className={styles.lists}>
          <li className={styles.li}>
            <a href="#">
                <FaGithub />
            </a>
          </li>
          <li className={styles.li}>
            <a href="#">
              <FaLinkedin />
            </a>
          </li>
          <li className={styles.li}>
            <a href="#">
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.copywrite}>
        <small>&copy; Ademary@AltSchool {year}</small>
      </div>
    </footer>
  );
};

export default Footer;
