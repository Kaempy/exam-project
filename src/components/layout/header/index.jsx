import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {

  const navLinks = ["About", "Users", "Contact", "Bomb"];

  const links = navLinks.map((link, index) => (
    <li key={index} className={styles.li}>
      <NavLink
        to={link.toLowerCase()}
        className={({ isActive }) => (isActive ? styles.active : styles.a)}
        end
      >
        {link}
      </NavLink>
    </li>
  ));

  return (
    <header className={styles.header}>
      <div className={styles["logo-wrapper"]}>
        <h1 className={styles.logo}>
          Ade<span className={styles["logo-span"]}>mary</span>
        </h1>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.lists}>
          <li className={styles.li}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : styles.a
              }
              end
            >
              Home
            </NavLink>
          </li>
          {links}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
