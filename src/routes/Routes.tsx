import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import HomePage from 'src/pages/HomePage'
import { useSite } from 'src/driver/MultisiteContext'
import DetailsPage from 'src/pages/DetailsPage'

const Routes: React.FC = () => {
  const site = useSite()
  return (
    <BrowserRouter>
      <Switch>
        <Route path={site.routes.HOME} exact component={HomePage} />
        <Route
          path={`${site.routes.PERSON_DETAILS}/:id`}
          exact
          component={DetailsPage}
        />
        <Redirect to={site.routes.HOME} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
