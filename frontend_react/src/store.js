import { combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { configureStore, Tuple } from '@reduxjs/toolkit';
import { productListReducer, productDetailsReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cart: { cartItems: cartItemsFromStorage }
}
const Middleware = [thunk]

const storeConfig = {
    reducer: reducer,
    initialState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Middleware),
    enhancer: new Tuple()
}
const store = configureStore(storeConfig)

export default store
