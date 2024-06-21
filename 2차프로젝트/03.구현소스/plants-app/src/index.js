import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./css/main.scss";
import Layout from "./components/layout/layout";
import Main from "./components/pages/Main";
import Shop from "./components/pages/Shop";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import ProductDetail from "./components/pages/ProductDetail";
import Login from "./components/pages/Login";
import SearchPage from "./components/pages/SearchPage";
import BlogDetail from "./components/pages/BlogDetail";

export default function MainComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />}/>
          <Route path="blog" element={<Blog />}/>
          <Route path="detail" element={<ProductDetail />} />
          <Route path="login" element={<Login />} />
          <Route path="search" element={<SearchPage/>} />
          <Route path="blogDetail" element ={<BlogDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<MainComponent />);
