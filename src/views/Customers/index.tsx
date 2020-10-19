import { Card, Divider, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { getAllCustomers } from '../../api/'
import CustomerDetailsModal from '../../components/CustomerDetailsModal'
import { Customer } from '../../types/Customer'
import CustomerList from './components/CustomerList'
import CustomerListHeader from './components/CustomerListHeader'

interface CustomersProps {}

const Customers = (Props: CustomersProps) => {
  const styles = useStyles()
  const [customers, setCustomers] = useState<Customer[]>([])
  const [selectedCustomerId, setSelectedCustomerId] = useState<string>('')
  const [showModal, setShowModal] = useState<boolean>(true)

  const selectedCustomer = () =>
    customers.find(customer => customer.id === selectedCustomerId)

  const handleOnCustomerSelect = (customerId: string) => {
    setSelectedCustomerId(customerId)
    setShowModal(true)
  }

  useEffect(() => {
    getAllCustomers().then(customers => setCustomers(customers))
  }, [])

  return (
    <section className={styles.root}>
      <Card className={styles.card}>
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
    </section>
  )
}

const useStyles = makeStyles((theme: any) => ({
  root: {
    padding: 20
  },
  card: {
    maxWidth: 700,
    margin: '50px auto 0',
    padding: 30,
    [theme.breakpoints.down('sm')]: {
      marginTop: '10px',
      padding: 20
    }
  },
  headerText: {
    textAlign: 'left'
  }
}))

export default Customers
