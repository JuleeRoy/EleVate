import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { useProductContext } from "./context/ProductContext";
import { Loader } from "./components";
import SingleProductPage from "./pages/SingleProductPage";
import Footer from "./components/Footer";
import CustomLoader from "./components/CustomLoader";
import Cart from "./components/Cart";

const App = () => {
  const allData = useProductContext();
  console.log(allData);
  const { isLoading, isError, products } = allData;
  if(isError===true)
  {
console.log()
  }
  if (isLoading == false && isError === false && products.length === 0) {
    return <Loader />;
  } else {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single/:id" element={<SingleProductPage />} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        <CustomLoader/>
        <Footer />
      </>
    );
  }
};

export default App;
