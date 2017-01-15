import React from 'react'
import { render } from 'react-dom'

import Samples from 'samples/samples.jsx'
import CarsContainer from 'components/cars/cars.container'

render((
  <div>
    <CarsContainer />
    <Samples />
  </div>
), document.getElementById('app'))
