import { Subject } from 'rxjs'
import { add$, list$ } from './events'

const stateSubject = new Subject()

const handleAdd = data => stateSubject.next(state => {
  console.log('state before add: ', state)
  return [...state, data]
})
const handleList = data => stateSubject.next(state => [...state, data])

add$.subscribe(handleAdd)
list$.subscribe(handleList)

const state$ = stateSubject
  .startWith([])
  .scan((state, handleEvent) => handleEvent(state))

export default state$
