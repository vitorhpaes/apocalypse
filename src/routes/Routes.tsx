import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from 'src/pages/HomePage'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
