import React, {useEffect, useState} from "react";
import axios from "axios";

const Products = (props) => {
    const [apiProducts, setApiProducts] = useState([]);
    useEffect(() => {
        axios.get('/products')
            .then((response) => {
                setApiProducts(response.data)
            })
    }, [])

    return (
        <>

            <div className={"pageDescription"}>
                <h1>Plants & more - Products</h1>
                <p>Add the products you would like to buy to your cart.</p>
            </div>
            <div className={"container"}>
                    {
                        apiProducts.map((apiProduct, index) => {
                            return (
                                    <div key={index} className={"product"}>
                                        <h3 className={"productTitle"}>{apiProduct.name}</h3>
                                        <h3 className={"productPrice"}>€{(Math.round(apiProduct.price * 100) / 100).toFixed(2)}</h3>
                                        <p className={"productDesc"}>{apiProduct.description}</p>
                                        <button>Add to cart</button>
                                    </div>
                            )
                        })
                    }
            </div>
        </>
    )
}
export default Products;