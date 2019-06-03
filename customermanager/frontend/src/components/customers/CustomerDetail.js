import React, { Component } from 'react'

import { connect } from 'react-redux'
import {
  getCustomerById,
  updateCustomer
} from '../../store/actions/customersActions'

class CustomerDetail extends Component {
  state = {
    isEditing: false,
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: ''
  }

  componentDidMount() {
    this.props.getCustomerById(this.props.match.params.id)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.customers.customer !== nextProps.customers.customer)
      this.setState({
        ...this.state,
        first_name: nextProps.customers.customer.first_name,
        last_name: nextProps.customers.customer.last_name,
        email: nextProps.customers.customer.email,
        phone: nextProps.customers.customer.phone,
        address: nextProps.customers.customer.address,
        city: nextProps.customers.customer.city,
        state: nextProps.customers.customer.state
      })
  }

  onChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleUpdate = () => {
    const {
      first_name,
      last_name,
      email,
      phone,
      address,
      city,
      state,
      isEditing
    } = this.state

    const newCustomer = {
      first_name,
      last_name,
      email,
      phone,
      address,
      city,
      state
    }

    const { id } = this.props.customers.customer

    this.props.updateCustomer(id, newCustomer)

    this.setState({
      ...this.state,
      isEditing: !isEditing
    })
  }

  render() {
    const { isEditing } = this.state

    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              ...this.state,
              isEditing: !isEditing
            })
          }}
          className='btn btn-warning btn-sm float-right'
        >
          Edit
        </button>
        <h1>{this.state.first_name} Details</h1>

        <ul className='list-group mt-3'>
          <li className='list-group-item mb-2'>
            {isEditing ? (
              <>
                <div className='input-group input-group-sm'>
                  <div className='input-group-prepend'>
                    <span
                      className='input-group-text'
                      id='inputGroup-sizing-sm'
                    >
                      First name
                    </span>
                  </div>
                  <input
                    type='text'
                    className='form-control'
                    aria-label='Small'
                    aria-describedby='inputGroup-sizing-sm'
                    name='first_name'
                    value={this.state.first_name}
                    onChange={this.onChange}
                  />
                  <div className='ml-1 input-group-prepend'>
                    <span
                      className='input-group-text'
                      id='inputGroup-sizing-sm'
                    >
                      Last name
                    </span>
                  </div>
                  <input
                    type='text'
                    className='form-control'
                    aria-label='Small'
                    aria-describedby='inputGroup-sizing-sm'
                    name='last_name'
                    value={this.state.last_name}
                    onChange={this.onChange}
                  />
                </div>
              </>
            ) : (
              'Name: ' + this.state.first_name + ' ' + this.state.last_name
            )}
          </li>
          <li className='list-group-item my-2'>
            {isEditing ? (
              <div className='input-group input-group-sm'>
                <div className='input-group-prepend'>
                  <span className='input-group-text' id='inputGroup-sizing-sm'>
                    Email
                  </span>
                </div>
                <input
                  type='email'
                  className='form-control'
                  aria-label='Small'
                  aria-describedby='inputGroup-sizing-sm'
                  name='email'
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
            ) : (
              'Email: ' + this.state.email
            )}
          </li>
          <li className='list-group-item my-2'>
            {isEditing ? (
              <div className='input-group input-group-sm'>
                <div className='input-group-prepend'>
                  <span className='input-group-text' id='inputGroup-sizing-sm'>
                    Phone
                  </span>
                </div>
                <input
                  type='tel'
                  className='form-control'
                  aria-label='Small'
                  aria-describedby='inputGroup-sizing-sm'
                  name='phone'
                  value={this.state.phone}
                  onChange={this.onChange}
                />
              </div>
            ) : (
              'Phone: ' + this.state.phone
            )}
          </li>
          <li className='list-group-item my-2'>
            {isEditing ? (
              <div className='input-group input-group-sm'>
                <div className='input-group-prepend'>
                  <span className='input-group-text' id='inputGroup-sizing-sm'>
                    Address
                  </span>
                </div>
                <input
                  type='text'
                  className='form-control'
                  aria-label='Small'
                  aria-describedby='inputGroup-sizing-sm'
                  name='address'
                  value={this.state.address}
                  onChange={this.onChange}
                />
              </div>
            ) : (
              'Address: ' + this.state.address
            )}
          </li>
          <li className='list-group-item my-2'>
            {isEditing ? (
              <div className='input-group input-group-sm'>
                <div className='input-group-prepend'>
                  <span className='input-group-text' id='inputGroup-sizing-sm'>
                    City
                  </span>
                </div>
                <input
                  type='text'
                  className='form-control'
                  aria-label='Small'
                  aria-describedby='inputGroup-sizing-sm'
                  name='city'
                  value={this.state.city}
                  onChange={this.onChange}
                />
              </div>
            ) : (
              'City: ' + this.state.city
            )}
          </li>
          <li className='list-group-item mt-2'>
            {isEditing ? (
              <div className='input-group input-group-sm'>
                <div className='input-group-prepend'>
                  <span className='input-group-text' id='inputGroup-sizing-sm'>
                    State
                  </span>
                </div>
                <input
                  type='text'
                  className='form-control'
                  aria-label='Small'
                  aria-describedby='inputGroup-sizing-sm'
                  name='state'
                  value={this.state.state}
                  onChange={this.onChange}
                />
              </div>
            ) : (
              'State: ' + this.state.state
            )}
          </li>
        </ul>
        {isEditing ? (
          <div className='float-right'>
            <button
              // onClick={this.props.deleteCustomer.bind(
              //   this,
              //   this.props.customers.customer.id
              // )}
              className='mt-3 btn btn-danger '
            >
              Delete
            </button>
            <button
              onClick={this.handleUpdate}
              className='mt-3 btn btn-success ml-3'
            >
              Update
            </button>
          </div>
        ) : null}
      </div>
    )
  }
}

const mapStateToProps = ({ customers }) => ({ customers })

export default connect(
  mapStateToProps,
  { getCustomerById, updateCustomer }
)(CustomerDetail)
