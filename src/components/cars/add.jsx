// @flow

import React, { Component } from 'react'
import { add } from '../../modules/cars/actions'

const INITIAL_VALUE = ''

export default class AddCar extends Component {
  state = { value: INITIAL_VALUE }

  handleChange = (event: Object) => {
    this.setState({ value: event.currentTarget.value })
  }

  handleSubmit = () => {
    add({ name: this.state.value })
    this.setState({ value: INITIAL_VALUE })
  }

  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.handleChange} />
        <button type="button" onClick={this.handleSubmit}>
          Add
        </button>
      </div>
    )
  }
}
