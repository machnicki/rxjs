import React from 'react'
import Http from 'my-http'
import Rx from 'rxjs'

export default function Samples() {
  const cars$ = Rx.Observable.fromPromise(Http({ name: 'cars' }).get())

  cars$.subscribe(
    data => Rx.Observable.from(data)
    .subscribe(item => console.log('item', item))
  )

  return (<div>
    This is my sample
  </div>)
}
