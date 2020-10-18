import { makeStyles } from '@material-ui/core'
import React from 'react'
import Divider from '../../../components/Divider'
import { Customer } from '../../../types/Customer'

interface CustomerListItemProps {
  customer: Customer
  handleOnCustomerSelect: Function
}

const CustomerListItem = (Props: CustomerListItemProps) => {
  const { customer, handleOnCustomerSelect } = Props
  const styles = useStyles()

  const handleOnCustomerClick = () => handleOnCustomerSelect(customer.id)

  return (
    <li className={styles.root} onClick={handleOnCustomerClick}>
      <span className={styles.text}>
        {customer.firstName} {customer.lastName}
      </span>
      <Divider />
    </li>
  )
}

const useStyles = makeStyles({
  root: {
    listStyle: 'none',
    cursor: 'pointer'
  },
  text: {
    display: 'block',
    padding: '30px 10px 15px',
    transition: '0.2s',
    color: '#aaa',
    '&:hover': {
      color: '#ffa726',
      backgroundColor: '#eee'
    }
  }
})

export default CustomerListItem
