import React from "react";
import {Link} from "react-router-dom"

const Home = () => {
    return (
        <>
            <div className={"pageDescription"}>
                <h1>Plants & more</h1>
                <p>Welcome to our webshop. You can find many plants and decorations in our webshop by following the link in our navigation or clicking <Link to={"/products"} className={"link"}>here</Link>.</p>
            </div>
        </>

    )
}

export default Home;