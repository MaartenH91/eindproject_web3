import React from "react";
import {useSelector} from "react-redux";
import {store} from "../store";
import {removeItem} from "../store/cart/slice";

const Cart = () => {
    const cartProducts = useSelector(state => state.cartItems)
    return (
        <>
            <div className={"pageDescription"}>
                <h1>Plants & more - Cart</h1>
                <p>Here is an overview of the products you are about to buy.</p>
            </div>
            <div>
                {
                    cartProducts.length === 0
                        ?
                        <h4>No items added to the cart! Please add one of our products.</h4>
                        :
                        cartProducts.map((item, index)=>(
                            <div>
                                <table>
                                    <tr>
                                        <td>{cartProducts.qty}</td>
                                        <td>{cartProducts.title}</td>
                                        <td>{cartProducts.totalPrice}</td>
                                        <td>
                                            <button
                                                onClick={
                                                    () => store.dispatch(removeItem(cartProducts.id))
                                                }
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        ))


                }
            </div>
        </>
    )
}

export default Cart;