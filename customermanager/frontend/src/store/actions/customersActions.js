import axios from '../../services/api'
import { GET_CUSTOMERS, GET_CUSTOMER_BY_ID, UPDATE_CUSTOMER } from './types'

export const getCustomers = () => dispatch => {
  axios
    .get('/customers')
    .then(data => {
      dispatch({
        type: GET_CUSTOMERS,
        payload: data.data
      })
    })
    .catch(e => console.log(e))
}

export const getCustomerById = id => dispatch => {
  axios
    .get(`/customers/${id}`)
    .then(data => {
      dispatch({
        type: GET_CUSTOMER_BY_ID,
        payload: data.data
      })
    })
    .catch(e => console.log(e))
}

export const updateCustomer = (id, customer) => dispatch => {
  axios
    .put(`/customers/${id}/`, { ...customer })
    .then(data => {
      dispatch({
        type: UPDATE_CUSTOMER,
        payload: data.data
      })
    })
    .catch(e => console.log(e))
}
