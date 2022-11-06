import { lazy, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

const Layout = lazy(() => import("../components/layout/index"));

const Home = lazy(() => import("../pages/home"));
const About = lazy(() => import("../pages/about"));
const Contact = lazy(() => import("../pages/contact"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Users = lazy(() => import("../pages/users/index"));
const Details = lazy(() => import("../pages/users/user-details"));

const ErrorFallback = lazy(() => import("../components/Error/ErrorFallback"));
const Bomb = lazy(() => import("../pages/Bomb"));
const Button = lazy(() => import("../components/Button"));


const Index = () => {
  const [explode, setExplode] = useState(false);

  const errorHandler = (error, errorInfo) => {
    console.log(error, errorInfo);
  };

  // return (
  //   <Layout>
  //     <ErrorBoundary FallbackComponent={ErrorFallback} onError={errorHandler}>
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="about" element={<About />} />
  //         <Route path="users" element={<Users />}>
  //           <Route path=":userId" element={<Details />} />
  //         </Route>
  //         <Route path="contact" element={<Contact />} />
  //         <Route path="*" element={<NotFound />} />
  //       </Routes>
  //     </ErrorBoundary>
  //   </Layout>
  // );
  return (
    <Layout>
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={errorHandler}>
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onError={errorHandler}
              >
                <Home />
              </ErrorBoundary>
            }
          />
          <Route
            path="about"
            element={
              <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onError={errorHandler}
              >
                <About />
              </ErrorBoundary>
            }
          />
          <Route
            path="users"
            element={
              <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onError={errorHandler}
              >
                <Users />
              </ErrorBoundary>
            }
          >
            <Route
              path=":userId"
              element={
                <ErrorBoundary
                  FallbackComponent={ErrorFallback}
                  onError={errorHandler}
                >
                  <Details />
                </ErrorBoundary>
              }
            />
          </Route>
          <Route
            path="contact"
            element={
              <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onError={errorHandler}
              >
                <Contact />
              </ErrorBoundary>
            }
          />
          <Route
            path="bomb"
            element={
              <>
                <Button explode={explode} setExplode={setExplode} />
                <ErrorBoundary
                  FallbackComponent={ErrorFallback}
                  onError={errorHandler}
                  onReset={() => setExplode(false)}
                  resetKeys={[explode]}
                >
                  {explode ? <Bomb /> : null}
                </ErrorBoundary>
              </>
            }
          />
          <Route
            path="*"
            element={
              <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onError={errorHandler}
              >
                <NotFound />
              </ErrorBoundary>
            }
          />
        </Routes>
      </ErrorBoundary>
    </Layout>
  );
};

export default Index;
