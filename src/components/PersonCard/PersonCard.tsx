import React from 'react'
import Person from 'src/@types/Person'
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Theme,
  Typography,
} from '@mui/material'
import { makeStyles } from '@material-ui/styles'
import { GiShamblingZombie, GiSwordman } from 'react-icons/gi'
import { FiActivity } from 'react-icons/fi'

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
  infectedIcon: {
    color: theme.palette.error.dark,
    fontSize: 22,
  },
  examiningIcon: {
    color: theme.palette.warning.dark,
    fontSize: 22,
  },
  goodIcon: {
    color: theme.palette.success.dark,
    fontSize: 22,
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
              <Badge color="primary">
                {person.status.description === 'good' && (
                  <GiSwordman
                    className={classes[`${person.status.description}Icon`]}
                  />
                )}
                {person.status.description === 'examining' && (
                  <FiActivity
                    className={classes[`${person.status.description}Icon`]}
                  />
                )}
                {person.status.description === 'infected' && (
                  <GiShamblingZombie
                    className={classes[`${person.status.description}Icon`]}
                  />
                )}
              </Badge>
            </Grid>
          </Grid>
          <Typography variant="h5">{person.name}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">See More</Button>
          <Button size="small" color={'warning'}>
            Exames
          </Button>
          <Button size="small" color={'error'}>
            Infected
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default PersonCard
