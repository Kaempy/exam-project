import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import Layout from "./components/Layout";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div className="fallback">Loading...</div>}>
          <App />
        </Suspense>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
