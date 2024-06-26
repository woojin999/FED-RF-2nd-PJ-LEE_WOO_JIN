import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import $ from "jquery";

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
import Member from "./components/pages/Member";

export default function MainComponent() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="detail" element={<ProductDetail />} />
          <Route path="login" element={<Login />} />
          <Route path="member" element={<Member/>}/>
          <Route path="search" element={<SearchPage />} />
          <Route path="blogDetail" element={<BlogDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    $(".ham-area").css({ left: "-350px", opacity: "0" });
    $(".gotopbtn").removeClass("on");
  }, [pathname]);
  return null;
};
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<MainComponent />);
