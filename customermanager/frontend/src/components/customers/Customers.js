import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getCustomers } from '../../store/actions/customersActions'

import { Link } from 'react-router-dom'

class Customers extends Component {
  componentDidMount() {
    this.props.getCustomers()
  }

  render() {
    return (
      <>
        <h2>Customers</h2>
        <table className='table table-striped mt-3'>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.customers.customers.map(customer => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.first_name}</td>
                <td>{customer.last_name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.address}</td>
                <td>{customer.city}</td>
                <td>{customer.state}</td>
                <td>
                  <Link
                    className='btn btn-danger btn-sm'
                    to={`/customer/${customer.id}`}
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )
  }
}

const mapStateToProps = ({ customers }) => ({ customers })

export default connect(
  mapStateToProps,
  { getCustomers }
)(Customers)
