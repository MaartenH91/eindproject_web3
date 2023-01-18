import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from '../store/cart/slice';

const CartItem = ({item}) => {
    const {id,qty, title, totalPrice} = item
    const dispatch = useDispatch();
    const cartProducts = useSelector(state => state.cart.cartItems)

    const removeItem = () => {
        dispatch(cartActions.removeItem(id))
    }

    return (
        <div>
            <table>
                <tr>
                    <td>{qty}</td>
                    <td>{title}</td>
                    <td>{totalPrice}</td>
                    <td>
                        <button onClick={removeItem}>
                            Delete
                        </button>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default CartItem;