import { createTheme } from '@mui/material/styles'
import { makeStyles as materialMakeStyles } from '@material-ui/styles'
import { Theme } from '@mui/material'

export interface iTheme extends Theme {}
export const makeStyles = materialMakeStyles

const SystemTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export default SystemTheme
