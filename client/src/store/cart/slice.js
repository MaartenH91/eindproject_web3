import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem(state, action){
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.productId === newItem.productId);
            state.totalQuantity++
            if (!existingItem){
                state.cartItems.push({
                    title: newItem.title,
                    productId: newItem.productId,
                    qty:1,
                    totalPrice: newItem.price
                })
                state.totalPrice += newItem.price
            }
            else {
                existingItem.qty++;
                existingItem.totalPrice += existingItem.price
            }
            state.totalAmount = state.cartItems.reduce((total,item)=>(total+item.price*item.qty))
        },
        removeItem(state, action){
            const productId = action.payload
            const existingItem = state.cartItems.find(item=>item.productId === productId)

            if (existingItem){
                state.cartItems = state.cartItems.filter(item=>item.productId !== productId)
            }

        }
    }

})

export const {actions, reducer} = cartSlice
export const {addItem, removeItem}=actions