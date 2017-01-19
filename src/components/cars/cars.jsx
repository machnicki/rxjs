// @flow
import React from 'react'
import AddCar from './add'

export default function Cars({
  items = [],
}: {
  items: Array<Object>,
}) {
  return (
    <div>
      <ul>
        {items.map((car, index) => <li key={index}>{car.name}</li>)}
      </ul>
      <AddCar />
    </div>
  )
}
