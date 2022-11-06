import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useErrorHandler } from "react-error-boundary";
import useFetchAPI from "../../hooks/useFetch"
import { Helmet } from "react-helmet-async";

const Users = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const { loading, data, error } = useFetchAPI(
    `https://randomuser.me/api/?page=${pageIndex}&results=10&seed=ab12`
  );
  useErrorHandler(error);

  const totalPages = 10;

  if (loading) {
    return <>Loading...</>;
  }
  !loading && console.log(data);

  if (!loading && error) {
    return <>Error</>;
  }

  return (
    <>
      <Helmet>
        <title>Users</title>
        <meta
          name="description"
          content="List of users that commonly use our website"
        />
        <link rel="canonical" href="/users" />
      </Helmet>
      <div className="user-container">
        <div className="div">
          <ul className="card-container">
            <div>
              <h2 className="title">List of Users</h2>
              <div className="list-container">
                {data?.results.map((each, index) => {
                  const name = `${each.name?.title} ${each.name?.first} ${each.name?.last}`;
                  return (
                    <Link
                      key={index}
                      to={`/users/${name?.toLowerCase().replaceAll(" ", "-")}`}
                    >
                      <li className="card">
                        <div className="avatar-container">
                          <img
                            src={each.picture.large}
                            alt="user's avatar"
                            width={'75%'}
                            height={'75%'}
                            title={each.login.username}
                          />
                        </div>
                        <h2>{each.login.username}</h2>
                        <p>
                          Location:{" "}
                          {`${each.location.city}, ${each.location.country}`}
                        </p>
                      </li>
                    </Link>
                  );
                })}
              </div>
            </div>
          </ul>
          <div className="footer-top">
            <p className="pageCount">
              <span>Total pages: &nbsp;</span>
              {pageIndex} of {totalPages}
            </p>
            {
              <button
                disabled={pageIndex <= 1}
                onClick={() => setPageIndex((prev) => prev - 1)}
                className="button"
              >
                &#8592;
              </button>
            }
            {Array.from(
              { length: totalPages },
              (value, index) => index + 1
            ).map((each) => (
              <button
                key={each}
                onClick={() => setPageIndex(each)}
                className="button"
              >
                {each}
              </button>
            ))}
            {
              <button
                disabled={pageIndex >= totalPages}
                aria-disabled={pageIndex >= totalPages}
                onClick={() => setPageIndex((prev) => prev + 1)}
                className="button"
              >
                &#8594;
              </button>
            }
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Users;
