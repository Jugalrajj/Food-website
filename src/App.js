import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import Placeorder from "./Pages/Placeorder/Placeorder";
import { useState } from "react";
import Login from "./Components/Login/Login";

function App() {

  const[showlogin,setShowlogin]=useState(false)
  return (
    <>
    {showlogin ? <Login setShowlogin={setShowlogin}/> : <></>}
      <div className="App">
        <Navbar setShowlogin={setShowlogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="order" element={<Placeorder />} />
        </Routes>
      </div>
      <Footer/>
      
    </>
  );
}

export default App;
