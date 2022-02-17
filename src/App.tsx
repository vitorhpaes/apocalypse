import React from 'react'
import Routes from './routes/Routes'
import { makeStyles, ThemeProvider } from '@material-ui/styles'
import SystemTheme from './helpers/SystemTheme'
import './App.css'

const useStyles = makeStyles({
  backgroundApp: {
    background: SystemTheme.palette.background.default,
  },
})

const App: React.FC = () => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={SystemTheme}>
      <div className={classes.backgroundApp}>
        <Routes />
      </div>
    </ThemeProvider>
  )
}

export default App
