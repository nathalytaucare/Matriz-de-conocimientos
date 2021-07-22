import React, { Fragment } from 'react'
import DashboardLeader from './components/DashboardLeader'
import EmployeeProfile from './components/EmployeeProfile'
import FilterAndSearch from './components/FilterAndSearch'
import LeaderProfile from './components/LeaderProfile'
import EmployeeView from './components/EmployeeView'
import Login from './components/Login'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const App = () => {
  return (
    <Fragment>
      <Router>

        <Switch>
        <Route exact path="/" component={Login} />
           
          <Route path="/dashboardLeader" component={DashboardLeader} />

          <Route path="/leaderProfile" component={LeaderProfile} />

          <Route path="/employeeProfile" component={EmployeeProfile} />

          <Route path="/filterAndSearch" component={FilterAndSearch} />

          <Route path="/EmployeeView" component={EmployeeView} />

        </Switch>

      </Router>
    </Fragment>
  );
}

export default App;
