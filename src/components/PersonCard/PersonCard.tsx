import React, { memo, useCallback } from 'react'
import {
  PERSON_STATUS_EXAMINING,
  PERSON_STATUS_INFECTED,
  PERSON_STATUS_GOOD,
  isExamining,
  isInfected,
  isGood,
  isDead,
} from 'src/@config/Person/Constants'
import Person, { PersonStatus } from 'src/@config/Person/Person'
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Theme,
  Typography,
} from '@mui/material'
import { makeStyles } from '@material-ui/styles'
import { handleDispatch } from 'src/state'
import { savePerson } from 'src/state/slices/people'
import { savePerson as savePersonAPI } from 'src/services/people/query'
import { useTranslator } from '@eo-locale/react'
import { useHistory } from 'react-router-dom'
import { useSite } from 'src/driver/MultisiteContext'
import StatusIcon from '../StatusIcon/StatusIcon'

interface PersonCardProps {
  person: Person
}

const useStyles = makeStyles((theme: Theme) => ({
  personCard: {
    background: `linear-gradient(to bottom right, ${theme.palette.primary.main}, ${theme.palette.primary.dark} 120%)`,
    position: 'relative',
  },
  personId: {
    position: 'absolute',
    top: theme.spacing(1),
    left: theme.spacing(1),
  },
  tagsParent: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
  tag: {
    fontSize: 10,
    border: `1px solid ${theme.palette.grey.A700}`,
    padding: theme.spacing(0.5),
    borderRadius: 8,
    color: theme.palette.grey.A700,
    marginLeft: 3,
    letterSpacing: 0.4,
  },
}))

const PersonCard: React.FC<PersonCardProps> = ({ person }) => {
  const classes = useStyles()

  return (
    <Grid item md={4} sm={6}>
      <Card className={classes.personCard}>
        <CardContent>
          <Grid container>
            <Typography
              sx={{ fontSize: 12 }}
              color="text.secondary"
              gutterBottom
              className={classes.personId}
            >
              #{person.id}
            </Typography>
            <Avatar
              alt={person.name}
              src={person.avatar}
              sx={{ width: 80, height: 80 }}
            />
            <Grid className={classes.tagsParent}>
              <StatusIcon status={person.status} size={22} />
            </Grid>
          </Grid>
          <Typography variant="h5">{person.name}</Typography>
        </CardContent>
        <CardActions>
          <PersonButtons person={person} showDetailsButton={true} />
        </CardActions>
      </Card>
    </Grid>
  )
}

interface PersonButtonsProps {
  person: Person
  showDetailsButton?: boolean
}

export const PersonButtons: React.FC<PersonButtonsProps> = ({
  person,
  showDetailsButton = false,
}) => {
  const dispatch = handleDispatch()
  const history = useHistory()
  const { routes } = useSite()

  const handleChangePersonStatus = useCallback(
    async (newStatus: PersonStatus) => {
      const modifiedPerson = await savePersonAPI({
        id: person.id,
        status: newStatus,
      })
      if (!modifiedPerson.id) return
      dispatch(
        savePerson({
          id: person.id,
          status: newStatus,
        })
      )
    },
    []
  )

  const redirectToPersonPage = () =>
    history.push(`${routes.PERSON_DETAILS}/${person.id}`)

  const { translate } = useTranslator()

  return (
    <>
      {!!showDetailsButton && (
        <Button size="small" onClick={redirectToPersonPage}>
          {translate('root.details')}
        </Button>
      )}
      {!isExamining(person.status) &&
        !isInfected(person.status) &&
        !isDead(person.status) && (
          <Button
            size="small"
            color={'warning'}
            onClick={async () =>
              await handleChangePersonStatus(PERSON_STATUS_EXAMINING)
            }
          >
            {translate('person.status.examining')}
          </Button>
        )}
      {isExamining(person.status) && !isDead(person.status) && (
        <Button
          size="small"
          color={'success'}
          onClick={async () =>
            await handleChangePersonStatus(PERSON_STATUS_GOOD)
          }
        >
          {translate('person.status.good')}
        </Button>
      )}
      {(isExamining(person.status) || isGood(person.status)) &&
        !isDead(person.status) && (
          <Button
            size="small"
            color={'error'}
            onClick={async () =>
              await handleChangePersonStatus(PERSON_STATUS_INFECTED)
            }
          >
            {translate('person.status.infected')}
          </Button>
        )}
    </>
  )
}

export default memo(PersonCard)
