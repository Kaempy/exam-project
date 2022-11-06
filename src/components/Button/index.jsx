import styles from "../Error/ErrorFallback.module.css";

const Button = ({ explode, setExplode }) => {
  return (
    <div className={styles["error-container"]}>
      <button onClick={() => setExplode((e) => !e)} className={styles.btn}>
        {!explode ? "Explode 💥" : "Unexplode"}
      </button>
    </div>
  );
};

export default Button;
