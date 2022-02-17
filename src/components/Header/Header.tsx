import React from 'react'
import { iTheme, makeStyles } from 'src/helpers/SystemTheme'

const useStyles = makeStyles((theme: iTheme) => ({
  header: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(1),
  },
}))

const Header: React.FC = ({ children }) => {
  const classes = useStyles()
  return <header className={classes.header}>{children}</header>
}

export default Header
