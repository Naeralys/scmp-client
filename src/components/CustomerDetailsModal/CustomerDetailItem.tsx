import { makeStyles } from '@material-ui/core'
import React from 'react'
import Divider from '../Divider'

interface CustomerDetailItemProps {
  label: string
  data: string
}

const CustomerDetailItem = (Props: CustomerDetailItemProps) => {
  const { label, data } = Props
  const styles = useStyles()
  return (
    <>
      <div className={styles.root}>
        <div className={styles.child}>{label}</div>
        <div className={styles.child}>{data}</div>
      </div>
      <Divider />
    </>
  )
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    padding: '40px 20px 20px'
  },
  child: {
    width: '45%',
    color: '#777'
  }
})

export default CustomerDetailItem
