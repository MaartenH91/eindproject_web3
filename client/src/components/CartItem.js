import React from "react";
import {store} from "../store";
import { removeItem } from '../store/cart/slice';

const CartItem = ({item}) => {
    const {id,qty, title, totalPrice} = item

    return (
        <div>
            <table>
                <tr>
                    <td>{qty}</td>
                    <td>{title}</td>
                    <td>{totalPrice}</td>
                    <td>
                        <button
                            onClick={
                                () => store.dispatch(removeItem(id))
                            }
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default CartItem;