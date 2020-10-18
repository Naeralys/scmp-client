import { makeStyles } from '@material-ui/core'
import React from 'react'

const CustomerListHeader = () => {
  const styles = useStyles()
  const headerText = 'Name'
  return (
    <li className={styles.root}>
      <span className={styles.headerText}>{headerText}</span>
    </li>
  )
}

const useStyles = makeStyles({
  root: {
    listStyle: 'none',
    textAlign: 'center',
    padding: 20
  },
  headerText: {
    color: '#ffa726',
    fontSize: '1em'
  }
})

export default CustomerListHeader
