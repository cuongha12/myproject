const getLocalCart = JSON.parse(localStorage.getItem('cart') || "[]");

const initCart = {
    cartItems: getLocalCart,
    cartNumber: getLocalCart.length,
}
const cartReducer = (state = initCart, action) => {
    switch (action.type) {
        case "ADD_TO_CART":

            let item = {
                id: action.playload.data.id,
                name: action.playload.data.title,
                price: action.playload.data.price,
                img: action.playload.data.image,
                quantity: 1,
            }
            let checkExist = false;
            state.cartItems.map((item, key) => {
                if (item.id === action.playload.data.id) {
                    state.cartItems[key].quantity++
                    checkExist = true;
                }
            })
            if (!checkExist) {
                state.cartItems.push(item);
                localStorage.setItem('cart', JSON.stringify(state.cartItems))
                return {
                    ...state,
                    cartItems: state.cartItems,
                    cartNumber: state.cartNumber + 1,
                }
            } else {
                localStorage.setItem('cart', JSON.stringify(state.cartItems))
                return {
                    ...state,
                    cartItems: state.cartItems,
                }
            }

        case "UPDATE_CART":
            state.cartItems.map((item, key) => {
                if (item.id === action.playload.id) {
                    state.cartItems[key].quantity = action.playload.quantity;
                }
            })
            localStorage.setItem('cart', JSON.stringify(state.cartItems))
            return {
                ...state,
                cartItems: state.cartItems,
            }

        case "REMOVE_FROM_CART":
            localStorage.setItem('cart', JSON.stringify(action.playload))
            return {
                ...state,
                cartItems: action.playload,
                cartNumber: action.playload.length,
            }

        case "CHECK_OUT_CART":
            state.cartItems = []
            localStorage.setItem('cart', JSON.stringify(action.playload))
            return {
                ...state,
                cartItems: action.playload,
                cartNumber: action.playload.length
            }
        default:
            return state
    }
}
export default cartReducer;