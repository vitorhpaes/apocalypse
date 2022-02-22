import React, { useEffect, useState } from 'react'
import {
  Avatar,
  Button,
  Chip,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import Header from 'src/components/Header/Header'
import { useHistory, useParams } from 'react-router-dom'
import { findPerson } from 'src/services/people/query'
import { useSite } from 'src/driver/MultisiteContext'
import { iTheme, makeStyles } from 'src/helpers/SystemTheme'
import { FiCalendar, FiChevronLeft } from 'react-icons/fi'
import { useTranslator } from '@eo-locale/react'
import { PERSON_STATUS_CLASSES } from 'src/@config/Person/Constants'
import StatusIcon from 'src/components/StatusIcon/StatusIcon'
import useFormat from 'src/components/hooks/useFormatDate'
import { GiDeathSkull } from 'react-icons/gi'
import Person from 'src/@config/Person/Person'
import { PersonButtons } from 'src/components/PersonCard/PersonCard'

interface DetailsPageParams {
  id: string
}

const useStyles = makeStyles((theme: iTheme) => ({
  fontColor: {
    color: theme.palette.text.primary,
  },
  fontColorSecondary: {
    color: theme.palette.text.secondary,
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
  addressList: {
    listStyle: 'none',
    color: theme.palette.text.secondary,
  },
}))

const DetailsPage: React.FC = () => {
  const { id } = useParams<DetailsPageParams>()
  const { routes } = useSite()
  const history = useHistory()
  const classes = useStyles()
  const { translate } = useTranslator()
  const [person, setPerson] = useState<Person>({} as Person)
  const [loading, setLoading] = useState<boolean>(true)

  const redirectToHomePage = () => history.push(routes.HOME)
  const getPerson = async () => {
    setLoading(true)
    const response = await findPerson(id)
    if (!response) return redirectToHomePage()
    setLoading(false)
    setPerson(response)
  }

  useEffect(() => {
    getPerson()
  }, [])

  if (!person.id || loading) return <h1>Loading...</h1>

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
                <Typography
                  variant={'body2'}
                  className={classes.fontColorSecondary}
                >
                  {person.description}
                </Typography>
                <PersonButtons person={person} />
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
            <PersonChips person={person} />
          </Grid>
        </Grid>
      </Header>
      <Grid md={12} item container marginTop={2}>
        <Grid item md={6}>
          <Typography variant={'body2'} className={classes.fontColor}>
            {translate('address.title')}:
          </Typography>
          <ul className={classes.addressList}>
            <li>
              {translate('address.country')}: {person.address.country}
            </li>
            <li>
              {translate('address.state')}: {person.address.state}
            </li>
            <li>
              {translate('address.city')}: {person.address.city}
            </li>
            <li>
              {translate('address.street')}: {person.address.street}
            </li>
            <li>
              {translate('address.zipCode')}: {person.address.zipCode}
            </li>
          </ul>
        </Grid>
        <Grid item md={6}>
          <Typography variant={'body2'} className={classes.fontColorSecondary}>
            {translate(`person.killsDescription.${person.status.description}`, {
              total: person.totalKills,
            })}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

interface PersonChipsProps {
  person: Person
}

const PersonChips: React.FC<PersonChipsProps> = ({ person }) => {
  const classes = useStyles()
  const { formatDate } = useFormat()
  const { translate } = useTranslator()
  return (
    <>
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
    </>
  )
}

export default DetailsPage
