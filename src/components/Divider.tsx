import { makeStyles } from '@material-ui/core'
import React from 'react'

const Divider = () => {
  const styles = useStyles()
  return <div className={styles.root}></div>
}

const useStyles = makeStyles({
  root: {
    height: 1,
    width: '100%',
    backgroundColor: '#ccc'
  }
})

export default Divider
