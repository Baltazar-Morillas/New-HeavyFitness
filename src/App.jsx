import React from "react";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCartContext from "./context/ShopppingCartContext";
import ComponenteA from "./Components/ComponenteA";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import ProductDetail from "./Components/ProductDetail";
import {useState, useEffect} from 'react'
import Loader from "./Components/Loader";

const App = () => {
  const[loading, setLoading]=useState(true)
  const[elementos, setElementos]=useState([])

  useEffect(()=>{
    setTimeout(()=>{
      setElementos(["hola","holi","holu"])
      setLoading(false)
    }, 2000)
  }, [])

  if(loading){
    return <Loader/>
  }

  return (
    //Renderizado condicional basado en una expresion
      <>
      {/* <h1>Lista de elementos</h1>
      
      <ul>
        {elementos.map((e)=>{
          return<li>{e}</li>
        })}
      </ul> */}
      
    

    <BrowserRouter>
       {/* <ShoppingCartContext>
         <ComponenteA />
       </ShoppingCartContext> */}
       <NavBar />
       <Routes>
         <Route exact path="/" element={<Home />} />
         <Route exact path="/contacto" element={<Contact />} />
         <Route exact path="/cart" element={<Cart />} />
         {/* <Route exact path="/product/:id" element={<ProductDetail />} /> */}
         <Route exact path="/category/:category" element={<ItemListContainer />} />
         <Route exact path="/item/:id" element={<ItemDetailContainer />} />
         {/* <Footer/> */}
       </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
