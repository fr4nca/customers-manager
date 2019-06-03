import React from 'react'

const CustomerDetail = props => {
  return (
    <div>
      <h1>Customers Detail</h1>
      <p>{props.match.params.id}</p>
    </div>
  )
}

export default CustomerDetail
