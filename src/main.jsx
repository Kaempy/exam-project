import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import Loading from "./components/loading/loading";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>

    <Router>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </Router>
    </HelmetProvider>
  </React.StrictMode>
);
