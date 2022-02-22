import { useTranslator } from '@eo-locale/react'
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material'
import React from 'react'
import { ALL_POSSIBLE_STATUS } from 'src/@config/Person/Constants'
import { StatusResponse } from 'src/@config/Person/Person'
import { iTheme, makeStyles } from 'src/helpers/SystemTheme'

interface PersonStatusFilterProps {
  setValue: (value?: StatusResponse) => void
  currentValue?: StatusResponse
}

const useStyles = makeStyles((theme: iTheme) => ({
  fontColor: {
    color: theme.palette.text.primary,
  },
}))

const PersonStatusFilter: React.FC<PersonStatusFilterProps> = ({
  setValue,
  currentValue,
}) => {
  const classes = useStyles()
  const { translate } = useTranslator()

  const handleSetValue = (value: string) => {
    const numberValue = Number(value)
    if (value === undefined) return setValue()
    setValue(numberValue as StatusResponse)
  }

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="default"
        name="radio-buttons-group"
        value={currentValue}
        row
      >
        {!!currentValue && (
          <FormControlLabel
            value={undefined}
            control={<Radio onChange={(e) => handleSetValue(e.target.value)} />}
            label={
              <Typography className={classes.fontColor}>
                {translate(`person.status.dontFilter`)}
              </Typography>
            }
          />
        )}
        {ALL_POSSIBLE_STATUS.map((status) => (
          <FormControlLabel
            key={status.id}
            value={status.id}
            control={<Radio onChange={(e) => handleSetValue(e.target.value)} />}
            label={
              <Typography className={classes.fontColor}>
                {translate(`person.status.${status.description}`)}
              </Typography>
            }
          />
        ))}
      </RadioGroup>
    </FormControl>
  )
}

export default PersonStatusFilter
