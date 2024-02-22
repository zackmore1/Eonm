import { PROD_LIST_REQUEST, PROD_LIST_SUCCESS, PROD_LIST_FAIL, PROD_DETAILS_FAIL, PROD_DETAILS_REQUEST, PROD_DETAILS_SUCCESS } from '../constants/productConstants';
import axios from 'axios';

export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PROD_LIST_REQUEST })
        const { data } = await axios.get('/api/products/')

        dispatch({
            type: PROD_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PROD_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PROD_DETAILS_REQUEST })
        const { data } = await axios.get(`/api/products/${id}`)

        dispatch({
            type: PROD_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PROD_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

