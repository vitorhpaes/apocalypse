import React from 'react'
import Routes from './routes/Routes'
import { makeStyles, ThemeProvider } from '@material-ui/styles'
import SystemTheme from './helpers/SystemTheme'
import './App.css'
import { StoreProvider } from './state'

const useStyles = makeStyles({
  backgroundApp: {
    background: SystemTheme.palette.background.default,
  },
})

const App: React.FC = () => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={SystemTheme}>
      <StoreProvider>
        <div className={classes.backgroundApp}>
          <Routes />
        </div>
      </StoreProvider>
    </ThemeProvider>
  )
}

export default App
