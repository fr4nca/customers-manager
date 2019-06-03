import {
  GET_CUSTOMERS,
  GET_CUSTOMER_BY_ID,
  UPDATE_CUSTOMER
} from '../actions/types'

const initialState = {
  customers: [],
  customer: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CUSTOMERS:
      return {
        ...state,
        customers: action.payload
      }
    case GET_CUSTOMER_BY_ID:
      return {
        ...state,
        customer: action.payload
      }
    case UPDATE_CUSTOMER:
      return {
        ...state,
        customer: action.payload
      }
    default:
      return {
        ...state
      }
  }
}
