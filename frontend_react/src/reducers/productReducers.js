import { PROD_LIST_REQUEST, PROD_LIST_SUCCESS, PROD_LIST_FAIL, PROD_DETAILS_FAIL, PROD_DETAILS_REQUEST, PROD_DETAILS_SUCCESS } from '../constants/productConstants';

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PROD_LIST_REQUEST:
      return { loading: true, products: [] }
    case PROD_LIST_SUCCESS:
      return { loading: false, products: action.payload }
    case PROD_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}


export const productDetailsReducer = (state = { product: {Reviews:[]} }, action) => {
    switch (action.type) {
      case PROD_DETAILS_REQUEST:
        return { loading: true, ...state}
      case PROD_DETAILS_SUCCESS:
        return { loading: false, product: action.payload }
      case PROD_DETAILS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }