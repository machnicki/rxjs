import React, { Component } from 'react'
import Cars from './cars'
import cars$ from 'modules/cars/repository'

export default class CarsContainer extends Component {
  state = { cars: cars$.first() }

  componentWillMount() {
    cars$
      .subscribe(data => this.setState({ cars: data }))
  }

  render() {
    return <Cars items={ this.state.cars }/>
  }
}
