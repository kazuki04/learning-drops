import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MyPage from "../../pages/MyPage"


const Routes = () => {
  return (
    <Router >
      <Switch>
        <Route
          path="/"
          component={MyPage}
        />
      </Switch>
    </Router>
  )
}

export default Routes;
