import React, { Component } from 'react'

const RxConnect = stores => childComponent => {
  return class RxContainer extends Component {
    state = {}

    constructor() {
      super()
      for (const storeName in stores) {
        this.state[storeName] = stores[storeName].first()
      }
    }

    componentWillMount() {
      for (const storeName in stores) {
        stores[storeName]
          .subscribe(data => this.setState({ [storeName]: data }))
      }
    }

    render() {
      return childComponent(this.state)
    }
  }
}

export default RxConnect
