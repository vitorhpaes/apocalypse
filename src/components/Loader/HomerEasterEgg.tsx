import React, { useEffect, useState } from 'react'
import { iTheme, makeStyles } from 'src/helpers/SystemTheme'
import GifLoader from './GifLoader'

const useStyles = makeStyles((theme: iTheme) => ({
  loaderWrapper: {
    position: 'fixed',
    right: 0,
    bottom: 0,
    width: '10vw',
    height: '10vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.palette.background.default,
    zIndex: 1,
  },
}))

const HomerEasterEgg: React.FC = () => {
  const [show, setShow] = useState(false)
  const classes = useStyles()

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 60000)
  }, [])

  useEffect(() => {
    if (!show) return
    setTimeout(() => {
      setShow(false)
    }, 60000)
  }, [show])

  return show ? (
    <div className={classes.loaderWrapper}>
      <GifLoader name="homer" width={300} />
    </div>
  ) : (
    <></>
  )
}

export default HomerEasterEgg
