import * as React from 'react'
import { bind } from 'bind-decorator'
import { DomainFactory } from '../../domain'
import Home from './home'
import { NotFound } from './not_found'

export class PageFactory {
  private domainFactory: DomainFactory

  constructor(domainFactory: DomainFactory) {
    this.domainFactory = domainFactory
  }

  @bind
  Home(): JSX.Element {
    return (
      <Home
      	sampleService={this.domainFactory.sampleService}
      />
    )
  }

  @bind
  NotFound(): JSX.Element {
    return (
      <NotFound />
    )
  }
}
