import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from 'src/pages/HomePage'
import { useSite } from 'src/driver/MultisiteContext'

const Routes: React.FC = () => {
  const site = useSite()
  return (
    <BrowserRouter>
      <Switch>
        <Route path={site?.routes.HOME} component={HomePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
