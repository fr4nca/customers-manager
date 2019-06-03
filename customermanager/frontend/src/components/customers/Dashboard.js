import React from 'react'

import Customers from './Customers'
import AddCustomer from './AddCustomer'

const Dashboard = () => {
  return (
    <div>
      <AddCustomer />
      <Customers />
    </div>
  )
}

export default Dashboard
