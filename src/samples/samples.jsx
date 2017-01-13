import React from 'react'
import Http from 'my-http'

export default function Samples() {
  Http({ name: 'cars' }).get().then(resp => console.log(resp))

  return (<div>
    This is my sample
  </div>)
}
