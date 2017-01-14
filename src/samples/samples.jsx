import React from 'react'
import Http from 'my-http'
import Rx from 'rxjs'

export default function Samples() {
  const cars$ = Rx.Observable
    .fromPromise(Http({ name: 'cars' }).get())
    .mergeMap(data => Rx.Observable.from(data))

    // or just create and manually trigger next() and complete()
    // subscribeOn(Rx.Scheduler.async or queue)
    // unsubscribe if done

    // actions && events (by Rx.Subject) for flux flow
    // start with && scan
    // sometimes use combineLatest instead of merge

  cars$
    .pluck('name')
    .subscribe(
      item => console.log('item', item),
      er => console.error(err),
      () => console.log('done!')
    )

  return (<div>
    This is my sample
  </div>)
}
