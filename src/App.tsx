import React, { Suspense } from 'react'
import Routes from './routes/Routes'
import { makeStyles, ThemeProvider } from '@material-ui/styles'
import SystemTheme from './helpers/SystemTheme'
import './App.css'
import { StoreProvider } from './state'
// import { loadByLocale } from './driver/fileLoader'
const BootSite = React.lazy(
  async () => await import('./driver/br/multisite/BootSite')
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
      <Suspense fallback={<h1>Rendering...</h1>}>
        <BootSite>
          <StoreProvider>
            <div className={classes.backgroundApp}>
              <Routes />
            </div>
          </StoreProvider>
        </BootSite>
      </Suspense>
    </ThemeProvider>
  )
}

export default App
