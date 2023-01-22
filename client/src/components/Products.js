import React, {useEffect, useState} from "react";
import axios from "axios";
import Confirm from "./Confirm";
import {addItem, removeItem} from '../store/cart/slice';
import {store} from '../store'
import {Link} from "react-router-dom";

const Products = () => {
    const [apiProducts, setApiProducts] = useState([]);
    useEffect(() => {
        axios.get('/products')
            .then((response) => {
                setApiProducts(response.data)
            })
    }, [])
    const products = []


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
                                        <button
/*
                                            onClick={() => {
                                            store.dispatch(addItem({apiProduct})
                                            )
                                        } }

*/
                                            onClick={() => {
                                                const newProduct = {
                                                    id: apiProduct.id,
                                                    qty: 1,
                                                    price: apiProduct.price
                                                }
                                                const existingProduct = products.find(p=>p.id === newProduct.id)
                                                if(!existingProduct){
                                                    products.push(newProduct)
                                                }
                                                else {
                                                    existingProduct.qty++
                                                    existingProduct.price += newProduct.price
                                                }
                                                console.log(products)
                                            }
                                            }
                                        >
                                            Add to cart
                                        </button>
                                    </div>
                            )
                        })
                    }
            </div>
            <div className={"container"}>
                <Link to={"/Confirm"}>
                    <button onClick={
                        () => {
                            axios.post('/products/confirmorder')
                                .then((response) => {
                                    for (let i=0; i<products.length;i++){
                                        console.log(products[i]);
                                        axios.post('/products/confirm', (products[i]))
                                            .then((response) => {
                                                console.log("Order confirmed")
                                            })
                                            .catch((err) => {
                                                console.log(err)
                                            })
                                    }
                                    }

                                )
                        }
                    }>
                        To checkout
                    </button>
                </Link>
            </div>
        </>
    )
}
export default Products;