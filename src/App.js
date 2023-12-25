import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import CategoryProducts from "./app/Pages/Products/CategoryProducts";
import Home from "./app/Pages/HomePage/Home";
import AllProducts from "./app/Pages/Products/AllProducts";
import SingleProductDetails from "./app/Pages/Products/ProductDetails/SingleProductDetails";
import Cart from "./app/Pages/Cart";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category/:categoryName" element={<CategoryProducts />} />
        {/* <Route path="products" element={<AllProducts />} /> */}
        <Route path="product/:productId" element={<SingleProductDetails />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </Fragment>
  );
}

export default App;
