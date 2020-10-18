import { makeStyles } from '@material-ui/core'
import React from 'react'

interface ButtonProps {
  label: string
  style?: string
  onClick: Function
}

const Button = (Props: ButtonProps) => {
  const { label, style, onClick } = Props
  const styles = useStyles()
  return (
    <button className={styles.root + ' ' + style} onClick={() => onClick()}>
      {label}
    </button>
  )
}

const useStyles = makeStyles({
  root: {
    padding: '10px 20px',
    cursor: 'pointer',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: 'transparent',
    transition: '0.2s'
  }
})

export default Button
