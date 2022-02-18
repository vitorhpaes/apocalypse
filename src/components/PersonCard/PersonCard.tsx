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
  const dispatch = handleDispatch()
  const { translate } = useTranslator()
  const history = useHistory()
  const { routes } = useSite()

  const handleChangePersonStatus = useCallback(
    (newStatus: PersonStatus) =>
      dispatch(
        savePerson({
          id: person.id,
          status: newStatus,
        })
      ),
    []
  )

  const redirectToPersonPage = () =>
    history.push(`${routes.PERSON_DETAILS}/${person.id}`)

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
          <Button size="small" onClick={redirectToPersonPage}>
            {translate('root.details')}
          </Button>
          {!isExamining(person.status) &&
            !isInfected(person.status) &&
            !isDead(person.status) && (
              <Button
                size="small"
                color={'warning'}
                onClick={() =>
                  handleChangePersonStatus(PERSON_STATUS_EXAMINING)
                }
              >
                {translate('person.status.examining')}
              </Button>
            )}
          {isExamining(person.status) && !isDead(person.status) && (
            <Button
              size="small"
              color={'success'}
              onClick={() => handleChangePersonStatus(PERSON_STATUS_GOOD)}
            >
              {translate('person.status.good')}
            </Button>
          )}
          {(isExamining(person.status) || isGood(person.status)) &&
            !isDead(person.status) && (
              <Button
                size="small"
                color={'error'}
                onClick={() => handleChangePersonStatus(PERSON_STATUS_INFECTED)}
              >
                {translate('person.status.infected')}
              </Button>
            )}
        </CardActions>
      </Card>
    </Grid>
  )
}

export default memo(PersonCard)
