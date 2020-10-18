import { Card, makeStyles, Modal } from '@material-ui/core'
import React from 'react'
import { Customer } from '../../types/Customer'
import Button from '../common/Button'
import CustomerDetailItem from './CustomerDetailItem'

interface CustomerDetailsModalProps {
  customer?: Customer
  show: boolean
  onClose: () => void
}

const CustomerDetailsModal = (Props: CustomerDetailsModalProps) => {
  const { customer, show, onClose } = Props
  const styles = useStyles()

  const handleOnCloseClick = () => onClose()

  if (customer)
    return (
      <Modal open={show} onClose={onClose}>
        <Card className={styles.root}>
          <h3>Customer Details</h3>
          <CustomerDetailItem
            label={'Name'}
            data={`${customer.firstName} ${customer.lastName}`}
          />
          <CustomerDetailItem label={'Email'} data={customer.email} />
          <CustomerDetailItem label={'Phone'} data={customer.phone} />
          <Button
            label={'Close'}
            style={styles.closeButton}
            onClick={handleOnCloseClick}
          />
        </Card>
      </Modal>
    )
  return <></>
}

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    margin: '30px auto 0',
    padding: 20
  },
  closeButton: {
    marginTop: 30,
    float: 'right',
    color: 'white',
    backgroundColor: '#ffa726',
    borderColor: '#ffa726',
    '&:hover': {
      color: '#ffa726',
      backgroundColor: 'transparent'
    }
  }
})

export default CustomerDetailsModal
