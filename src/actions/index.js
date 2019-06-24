import {
    FETCH_PRODUCTS,
    FETCH_USERS,
    CREATE_PRODUCT,
    REMOVE_FROM_LIST,
    EDIT_PRODUCT,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREMENT,
    DECREMENT,
    RESET,
    SEARCH_PRODUCT
} from './types.js';

export const fetchProducts = () => async dispatch => {
    //products
    const responseProducts = await fetch('https://services.odata.org/V3/Northwind/Northwind.svc/Products?$format=json')
    const productsValue = await responseProducts.json();
    const products = productsValue.value;

    //categories
    const responseCategories = await fetch('https://services.odata.org/V3/Northwind/Northwind.svc/Categories?$format=json')
    const categoriesValue = await responseCategories.json();
    const categories = categoriesValue.value;

    /*pronalazi ime kategorije u nizu kategorija po atributu CategoryID*/
    const getCategoryNameByCategoryId = (categoryId, categories) => {
        for (let i in categories) {
            if (categories[i].CategoryID === categoryId) {
                return categories[i].CategoryName;
            }
        }
    }

    for (let i in products) {
        products[i].CategoryName = getCategoryNameByCategoryId(products[i].CategoryID, categories);
        products[i].ImagePath = getImagePath();
        products[i].UnitPrice = parseFloat(products[i].UnitPrice);
        products[i].Quantity = 1;
        products[i].Total = 1;
        products[i].InCart = false;
        const date = new Date();
        products[i].CreationDate = date.toLocaleDateString();
    }

    dispatch({
        type: FETCH_PRODUCTS,
        payload: {
            products,
            categories
        }
    });
};

/*vraca putanju random izabrane slike*/
const getImagePath = () => {
    return "images/products/" + getRandomNumber(1, 6) + ".jpg";
}

/*vraca slucajno izabrani ceo broj izmedju min i max */
const getRandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min)) + min;
}

export const fetchUsers = () => async dispatch => {
    const responseUsers = await fetch('https://services.odata.org/V3/Northwind/Northwind.svc/Employees?$format=json')
    const usersValue = await responseUsers.json();
    const users = usersValue.value;
    dispatch({
        type: FETCH_USERS,
        payload: users
    });
};

//create product-admin
export const createProduct = product => ({
    type: CREATE_PRODUCT,
    payload: product
});

//remove from list-admin
export const removeFromList = id => ({
    type: REMOVE_FROM_LIST,
    payload: id
});

//edit product-admin
export const editProduct = (id) => {
    return {
        type: EDIT_PRODUCT,
        payload: id
    }
};

//add product to cart - user
export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product
});

export const removeFromCart = ({ ProductID, UnitPrice, Quantity }) => ({
    type: REMOVE_FROM_CART,
    ProductID,
    UnitPrice,
    Quantity
});

export const incrementQuantity = ({ ProductID, UnitPrice }) => ({
    type: INCREMENT,
    ProductID,
    UnitPrice
});

export const decrementQuantity = ({ ProductID, UnitPrice }) => ({
    type: DECREMENT,
    ProductID,
    UnitPrice
});

export const clearCart = () => ({
    type: RESET
});

export const searchProduct = (text = '') => ({
    type: SEARCH_PRODUCT,
    text
});
