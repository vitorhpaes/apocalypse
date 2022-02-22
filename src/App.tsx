import React, { Suspense } from 'react'
import Routes from './routes/Routes'
import { makeStyles, ThemeProvider } from '@material-ui/styles'
import SystemTheme from './helpers/SystemTheme'
import './App.css'
import { StoreProvider } from './state'
import getCurrentLocale from './helpers/UrlParser'
import Loader from './components/Loader/Loader'

const dynamicLocale = getCurrentLocale()

const BootSite = React.lazy(
  async () => await import(`./driver/${dynamicLocale}/multisite/BootSite`)
)

const useStyles = makeStyles({
  backgroundApp: {
    background: SystemTheme.palette.background.default,
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    overflow: 'auto',
  },
})

const App: React.FC = () => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={SystemTheme}>
      <div className={classes.backgroundApp}>
        <Suspense fallback={<Loader />}>
          <BootSite>
            <StoreProvider>
              <Routes />
            </StoreProvider>
          </BootSite>
        </Suspense>
      </div>
    </ThemeProvider>
  )
}

export default App
