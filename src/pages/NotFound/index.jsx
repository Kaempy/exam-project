import { useEffect , useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import PageNotFound from "/assets/images/page-not-found.gif";
import styles from "./NotFound.module.css"

const NotFound = () => {
  const navigate = useNavigate();
  const [countdown, setCoundown] = useState(3);

  useEffect(() => {
    setTimeout(() => {
      if (!countdown) {
        navigate("/");
        return;
      }
      setCoundown((prev) => prev - 1);
    }, 1000);
  }, [countdown]);

  const goHomeHandler = () => {
    navigate("/");
  };

  return (
    <>
    <Helmet>
      <title>Page Not Found!</title>
      <meta
        name="description"
        content="Oppsss.....! &nbsp; The page you are looking for does not exist!"
      />
      <link rel="canonical" href="*" />
    </Helmet>
    <div className={styles['NotFound-container']}>
      <div className={styles.wrapper}>
        <h2>
          Redirecting to Homepage in <span>{countdown}</span>
        </h2>
      <img src={PageNotFound} alt="page not found" title="404 page"/>
      </div>
      <div>
        <button type="button" onClick={goHomeHandler} className={styles.btn}>
          Go home
        </button>
      </div>
    </div>
    </>
  );
};

export default NotFound;
