import React from 'react'
import { iTheme, makeStyles } from 'src/helpers/SystemTheme'
import GifLoader from './GifLoader'

const useStyles = makeStyles((theme: iTheme) => ({
  loaderWrapperFullScreen: {
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
  loaderWrapper: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.palette.background.default,
    opacity: 0.8,
    zIndex: 1,
  },
}))

interface LoaderProps {
  fullScreen?: boolean
}

const Loader: React.FC<LoaderProps> = ({ fullScreen }) => {
  const classes = useStyles()
  return (
    <div
      className={
        fullScreen ? classes.loaderWrapperFullScreen : classes.loaderWrapper
      }
    >
      <GifLoader name="loading" />
    </div>
  )
}

export default Loader
