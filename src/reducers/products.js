import { FETCH_PRODUCTS, CREATE_PRODUCT, REMOVE_FROM_LIST, EDIT_PRODUCT } from '../actions/types';

const initalState = {
    products: [],
    categories: []
};

export default (state = initalState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                products: action.payload.products,
                categories: action.payload.categories
            }
        case CREATE_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case REMOVE_FROM_LIST:
            return {
                ...state,
                products: state.products.filter(product => product.ProductID !== action.payload.ProductID)
            }
        case EDIT_PRODUCT:
            return {
                ...state,
                products: state.products.find(product => {
                    return product.ProductID === action.payload
                })
            }
        default:
            return state;
    }
}