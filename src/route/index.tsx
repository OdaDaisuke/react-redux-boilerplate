import * as React from 'react'
import *  as ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router'
import { Router } from 'react-router-dom'
import { Header } from '../view/molecules/header'
import Home from '../view/pages/home'
import { NotFound } from '../view/pages/not_found'

export interface AppRouteProps {
  history: any
}

export class AppRoute extends React.Component<AppRouteProps, any> {
  render(): JSX.Element {
    return (
      <Router history={this.props.history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}
