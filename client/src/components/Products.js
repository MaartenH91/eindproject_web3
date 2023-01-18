import React, {useEffect, useState} from "react";
import axios from "axios";
import {cartActions} from '../store/cart/slice';
import store from '../store'
import {useDispatch, useSelector} from "react-redux";

const Products = (props) => {
    const [apiProducts, setApiProducts] = useState([]);
    useEffect(() => {
        axios.get('/products')
            .then((response) => {
                setApiProducts(response.data)
            })
    }, [])

    const {productId, title} = props.item
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(cartActions.addItem({
            productId,
            title,
            })
        )
    }

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
                                        <button onClick={() => {
                                            dispatch(cartActions.addItem({
                                                    productId,
                                                    title,
                                                })
                                            )
                                        } }>
                                            Add to cart
                                        </button>
                                    </div>
                            )
                        })
                    }
            </div>
        </>
    )
}
export default Products;