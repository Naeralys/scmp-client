import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Customer } from '../../../types/Customer'
import CustomerListItem from './CustomerListItem'

interface CustomerListProps {
  customers: Customer[]
  handleOnCustomerSelect: Function
}

const CustomerList = (Props: CustomerListProps) => {
  const { customers, handleOnCustomerSelect } = Props
  const styles = useStyles()
  return (
    <ul className={styles.root}>
      {customers.map((customer, index) => (
        <CustomerListItem
          key={index}
          customer={customer}
          handleOnCustomerSelect={handleOnCustomerSelect}
        />
      ))}
    </ul>
  )
}

const useStyles = makeStyles({
  root: {
    padding: 0,
    margin: '30px 0 0 0'
  }
})

export default CustomerList
