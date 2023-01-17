import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import styles from "./header.module.css";

const Header = () => {
  const { state, signInWithGoogle: signInHandler, logoutHandler } = useAuth();
  return (
    <header className={styles.header}>
      <div className={styles["logo-wrapper"]}>
        <h1 className={styles.logo}>
          Ade<span className={styles["logo-span"]}>mary</span>
        </h1>
      </div>
      <nav className={styles.nav}>
        {state.user ? (
          <ul className={styles.lists}>
            <li className={styles.li}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.active : styles.a
                }
                end
              >
                Profile
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink
                to="users"
                className={({ isActive }) =>
                  isActive ? styles.active : styles.a
                }
                end
              >
                Users
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink
                to="bomb"
                className={({ isActive }) =>
                  isActive ? styles.active : styles.a
                }
                end
              >
                Bomb
              </NavLink>
            </li>
            <li className={styles.li}>
              <button onClick={logoutHandler} className="signin-btn">
                Logout
              </button>
            </li>
          </ul>
        ) : (
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
            <li className={styles.li}>
              <NavLink
                to="bomb"
                className={({ isActive }) =>
                  isActive ? styles.active : styles.a
                }
                end
              >
                Bomb
              </NavLink>
            </li>
            <li>
              <button onClick={signInHandler} className="signin-btn">
                <img
                  src="https://img.icons8.com/fluency/48/null/google-logo.png"
                  alt="google logo"
                  width={20}
                  height={20}
                />
                &nbsp;
                <span>Sign In</span>
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
