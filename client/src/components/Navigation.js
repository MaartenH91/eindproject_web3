import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return(
        <ul className={"navMenu nav"} >
            <Link to={"/home"} className={"navItem"}><li className={"nav-link"}>Home</li></Link>
            <Link to={"/products"} className={"navItem"}><li className={"nav-link"}>Products</li></Link>
            <Link to={"/cart"} className={"navItem"}><li className={"nav-link"}>Shopping Cart</li></Link>
        </ul>
        )
}

export default Navigation;