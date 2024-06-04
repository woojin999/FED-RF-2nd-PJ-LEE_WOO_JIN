import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./css/main.scss";
import Layout from "./components/layout/layout";
import Main from "./components/pages/Main";

export default function MainComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<MainComponent />);
