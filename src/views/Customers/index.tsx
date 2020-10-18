import { Card, Divider, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import CustomerDetailsModal from '../../components/CustomerDetailsModal'
import { Customer } from '../../types/Customer'
import CustomerList from './components/CustomerList'
import CustomerListHeader from './components/CustomerListHeader'

interface CustomersProps {}

const Customers = (Props: CustomersProps) => {
  const styles = useStyles()
  const [customers, setCustomers] = useState<Customer[]>([
    {
      id: '1',
      firstName: 'Adam',
      lastName: 'Lind',
      email: 'adamlind@live.se',
      phone: '0708500633'
    },
    {
      id: '2',
      firstName: 'Camilla',
      lastName: 'Lamsa',
      email: 'camilla.lamsa@gmail.com',
      phone: '0761705595'
    }
  ])
  const [selectedCustomerId, setSelectedCustomerId] = useState<string>('')
  const [showModal, setShowModal] = useState<boolean>(true)

  const selectedCustomer = () =>
    customers.find(customer => customer.id === selectedCustomerId)

  const handleOnCustomerSelect = (customerId: string) => {
    setSelectedCustomerId(customerId)
    setShowModal(true)
  }

  return (
    <Card className={styles.root}>
      <h2 className={styles.headerText}>Customers</h2>
      <CustomerListHeader />
      <Divider />
      <CustomerList
        customers={customers}
        handleOnCustomerSelect={handleOnCustomerSelect}
      />
      <CustomerDetailsModal
        customer={selectedCustomer()}
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </Card>
  )
}

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    margin: '50px auto 0',
    padding: 30
  },
  headerText: {
    textAlign: 'left'
  }
})

export default Customers
