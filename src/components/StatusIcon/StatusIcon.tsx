import { Badge } from '@mui/material'
import React from 'react'
import { FiActivity, FiThumbsDown } from 'react-icons/fi'
import { GiShamblingZombie, GiSwordman } from 'react-icons/gi'
import { PERSON_STATUS_CLASSES } from 'src/@config/Person/Constants'
import { PersonStatus } from 'src/@config/Person/Person'
import { iTheme, makeStyles } from 'src/helpers/SystemTheme'

// import { Container } from './styles';
interface StatusIconProps {
  status: PersonStatus
  size: number | string | undefined
}

const useStyles = makeStyles((theme: iTheme) => ({
  infectedIcon: {
    color: theme.palette.error.dark,
  },
  examiningIcon: {
    color: theme.palette.warning.dark,
  },
  goodIcon: {
    color: theme.palette.success.dark,
  },
  deadIcon: {
    color: theme.palette.grey.A700,
  },
}))

const StatusIcon: React.FC<StatusIconProps> = ({ status, ...props }) => {
  const classes = useStyles()

  return (
    <Badge color={PERSON_STATUS_CLASSES[status.id]}>
      {status.id === 1 ? (
        <GiSwordman
          className={classes[`${status.description}Icon`]}
          {...props}
        />
      ) : status.id === 2 ? (
        <FiActivity
          className={classes[`${status.description}Icon`]}
          {...props}
        />
      ) : status.id === 3 ? (
        <GiShamblingZombie
          className={classes[`${status.description}Icon`]}
          {...props}
        />
      ) : (
        <FiThumbsDown
          className={classes[`${status.description}Icon`]}
          {...props}
        />
      )}
    </Badge>
  )
}

export default StatusIcon
