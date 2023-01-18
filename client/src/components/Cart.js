import React from "react";
import {useDispatch, useSelector} from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
    const dispatch = useDispatch()
    const cartProducts = useSelector(state => state.cart.cartItems)
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
                            <CartItem item={item} key={index} />
                        ))

                }
            </div>
        </>
    )
}

export default Cart;