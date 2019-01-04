import * as React from 'react'
import { Route, Switch } from 'react-router'
import { Router } from 'react-router-dom'
import { DomainFactory } from '../domain'
import { PageFactory } from '../view/pages/factory'

/* pages */
import { Header } from '../view/molecules/header'

export interface AppRouteProps {
  history: any
}

export class AppRoute extends React.Component<AppRouteProps, any> {
  private df: DomainFactory
  private pf: PageFactory

  constructor(props: AppRouteProps) {
    super(props)
    this.df = new DomainFactory()
    this.pf = new PageFactory(this.df)
  }

  render(): JSX.Element {

    return (
      <Router history={this.props.history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={this.pf.Home} />
            <Route path="*" component={this.pf.NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}
