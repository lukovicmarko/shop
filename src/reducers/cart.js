import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREMENT,
    DECREMENT,
    RESET
} from '../actions/types';

const initialState = {
    cart: [],
    suma: 0,
    totalPrice: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const product = action.payload;
            const tempCart = [...state.cart];
            //Find product index in the cart
            const index = tempCart.findIndex(item => item.ProductID === action.payload.ProductID);
            //Check if the product is in the cart
            if (index === -1) {
                //Insert product if it is not in the in cart
                state.cart.push(product);
                product.Total = product.Quantity * product.UnitPrice
            } else {
                product.Quantity++
                product.Total = product.Quantity * product.UnitPrice
            }
            return {
                ...state,
                cart: [...state.cart],
                totalPrice: state.totalPrice += action.payload.UnitPrice
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(product => product.ProductID !== action.ProductID),
                totalPrice: state.totalPrice -= action.UnitPrice * action.Quantity
            }

        case INCREMENT: {
            let tempCart = [...state.cart];
            const selectedProduct = tempCart.find(item => item.ProductID === action.ProductID);
            const index = tempCart.indexOf(selectedProduct);
            const phone = tempCart[index];
            phone.Quantity += 1;
            phone.Total = phone.Quantity * phone.UnitPrice;
            return {
                totalPrice: state.totalPrice += action.UnitPrice,
                cart: [...tempCart]
            }
        }

        case DECREMENT: {
            let tempCart = [...state.cart];
            const selectedProduct = tempCart.find(item => item.ProductID === action.ProductID);
            const index = tempCart.indexOf(selectedProduct);
            const phone = tempCart[index];
            phone.Quantity -= 1;
            phone.Total -= phone.UnitPrice;
            return {
                totalPrice: state.totalPrice -= action.UnitPrice,
                cart: [...tempCart]
            }
        }

        case RESET:
            return {
                cart: [],
                totalPrice: 0
            }
        default:
            return state;
    }
}
