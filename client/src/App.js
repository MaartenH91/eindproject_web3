import './App.css';
import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Navigation from "./components/Navigation"
import Home from "./components/Home"
import Products from "./components/Products"
import Cart from "./components/Cart"
import Footer from "./components/Footer"
import Confirm from"./components/Confirm"

function App() {
  return (
    <div className="App">
        <Router>
            <nav className={"container-fluid"}>
                <Navigation />
            </nav>
            <div className={"container-fluid content"}>
                <Routes>
                    <Route path={"/"} element={<Home />}/>
                    <Route path={"/home"} element={<Home />}/>
                    <Route path={"/products"} element={<Products />}/>
                    <Route path={"/cart"} element={<Cart />}/>
                    <Route path={"/confirm"} element={<Confirm />}/>
                    <Route path={"/confirm/:index"} element={<Confirm />}/>
                </Routes>
            </div>
            <footer className={"fixed-bottom"}>
                <Footer />
            </footer>
        </Router>

    </div>
  );
}

export default App;
