import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const Details = () => {
  const params = useParams();
  const { userId } = params;
  return (
    <>
      <Helmet>
        <title>Details Page for {userId}</title>
        <meta
          name="description"
          content={`This is the details page for ${userId}`}
        />
        <link rel="canonical" href={`/users/${userId}`} />
      </Helmet>
      <aside className="aside">This is the details page for {userId}</aside>
    </>
  );
};

export default Details;
