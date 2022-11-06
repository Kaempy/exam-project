import { useNavigate } from "react-router-dom";
import styles from "./ErrorFallback.module.css";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  const navigate = useNavigate();
  const resetErrorHandler = () => {
    resetErrorBoundary();
    navigate("/");
  };
  return (
    <div role="alert" className={styles["error-container"]}>
      <p>
        Something went wrong <span>:(</span>
      </p>
      <code>{error.message}</code>
      <img
        src="/assets/images/smth-went-wrong.svg"
        alt="oppss... something went wrong"
        title="ooopsss... something went wrong"
      />
      <button onClick={resetErrorHandler} className={styles.btn}>
        Try again
      </button>
    </div>
  );
};

export default ErrorFallback;
