import React from 'react'
import { iTheme, makeStyles } from 'src/helpers/SystemTheme'
import GifLoader from './GifLoader'

const useStyles = makeStyles((theme: iTheme) => ({
  loaderWrapper: {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.palette.background.default,
    zIndex: 1,
  },
}))

const Loader: React.FC = () => {
  const classes = useStyles()
  return (
    <div className={classes.loaderWrapper}>
      <GifLoader name="loading" />
    </div>
  )
}

export default Loader
