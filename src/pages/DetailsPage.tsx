import React from 'react'
import {
  Avatar,
  Button,
  Chip,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import Header from 'src/components/Header/Header'
import { handleSelect } from 'src/state'
import { Redirect, useHistory, useParams } from 'react-router-dom'
import { useSite } from 'src/driver/MultisiteContext'
import { iTheme, makeStyles } from 'src/helpers/SystemTheme'
import { FiCalendar, FiChevronLeft } from 'react-icons/fi'
import { useTranslator } from '@eo-locale/react'
import { PERSON_STATUS_CLASSES } from 'src/@config/Person/Constants'
import StatusIcon from 'src/components/StatusIcon/StatusIcon'
import useFormat from 'src/components/hooks/useFormatDate'
import { GiDeathSkull } from 'react-icons/gi'

interface DetailsPageParams {
  id: string
}

const useStyles = makeStyles((theme: iTheme) => ({
  fontColor: {
    color: theme.palette.text.primary,
  },
  headerGrid: {
    marginTop: theme.spacing(3),
  },
  headerInfo: {
    padding: theme.spacing(2),
  },
  headerInfoDescription: {
    paddingLeft: theme.spacing(2),
  },
  chip: {
    paddingLeft: `${theme.spacing(1)}!important`,
  },
}))

const DetailsPage: React.FC = () => {
  const { id } = useParams<DetailsPageParams>()
  const { routes } = useSite()
  const { formatDate } = useFormat()
  const history = useHistory()
  const { translate } = useTranslator()
  const classes = useStyles()
  const person = handleSelect((state) =>
    state.people.list.find((person) => person.id === Number(id))
  )

  const redirectToHomePage = () => history.push(routes.HOME)

  if (!person) return <Redirect to={routes.HOME} />

  return (
    <Container>
      <Header>
        <Grid container className={classes.headerGrid}>
          <Grid item container md={1} alignItems={'center'}>
            <Button
              color={'primary'}
              size={'small'}
              onClick={redirectToHomePage}
            >
              <FiChevronLeft size={80} />
            </Button>
          </Grid>
          <Grid item md={2}>
            <Avatar
              src={person.avatar}
              alt={person.name}
              sx={{ width: '100%', height: 'auto' }}
            />
          </Grid>
          <Grid item md={6}>
            <div className={classes.headerInfo}>
              <Typography variant={'h3'} className={classes.fontColor}>
                {person.name}
              </Typography>
              <div className={classes.headerInfoDescription}>
                <Typography variant={'body2'} className={classes.fontColor}>
                  {person.description}
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid
            item
            container
            gap={2}
            md={3}
            direction={'column'}
            alignItems={'flex-end'}
          >
            <Chip
              size={'small'}
              label={`#${person.id}`}
              color={'secondary'}
              variant={'outlined'}
            />
            <Chip
              size={'small'}
              className={classes.chip}
              label={translate(person.status.description)}
              color={PERSON_STATUS_CLASSES[person.status.id]}
              icon={<StatusIcon status={person.status} size={15} />}
              variant={'outlined'}
            />
            <Chip
              size={'small'}
              className={classes.chip}
              label={`${translate('person.age')}: ${person.age}`}
              color={'info'}
              icon={<FiCalendar size={15} />}
              variant={'outlined'}
            />
            {!!person.deathDate && (
              <Chip
                size={'small'}
                className={classes.chip}
                label={`${formatDate(new Date(person.deathDate))}`}
                color={'secondary'}
                icon={<GiDeathSkull size={15} />}
                variant={'outlined'}
              />
            )}
          </Grid>
        </Grid>
      </Header>
    </Container>
  )
}

export default DetailsPage
