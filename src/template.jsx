import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./template.css";
import Navbar from "./comps/navbar/navbar.jsx";
import Frontpage from "./pages/frontpage/frontpage.jsx";
import { useRoutes } from "react-router-dom";
import About from "./pages/about/about.jsx";
import ProductListPage from "./pages/productList/productList.jsx";
import SingleProductPage from "./pages/singleProduct/singleProduct.jsx";

function App() {
  let routes = useRoutes([
    {
      path: "/",
      element: <Frontpage />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/products",
      element: <ProductListPage />,
    },
    {
      path: "/products/:id",
      element: <SingleProductPage />,
    },
  ]);

  return (
    <>
      <Navbar />
      {routes}
    </>
  );
}

export default App;
