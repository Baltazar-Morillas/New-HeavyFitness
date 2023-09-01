import React from "react";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import ShoppingCartContext from "./context/ShopppingCartContext";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import Footer from "./Components/Footer";
import SendOrder from "./Components/SendOrder";
//
const App = () => {
  return (
    <>
      <BrowserRouter>
        <ShoppingCartContext>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contacto" element={<Contact />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/category/:category" element={<ItemListContainer />}/>
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/checkout" element={<SendOrder/>}/>
          </Routes>
          <Footer />
        </ShoppingCartContext>
      </BrowserRouter>
    </>
  );
};

export default App;
