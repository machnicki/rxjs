import { BehaviorSubject, Subject } from 'rxjs'
import { add$, list$ } from './events'

const stateSubject = new Subject()

const handleAdd = data => stateSubject.next(state => [...state, data])
const handleList = data => stateSubject.next(state => [...state, data])

add$.subscribe(handleAdd)
list$.subscribe(handleList)

const initialState = [
  { name: 'Seat Cordoba' },
  { name: 'Porsche Carrera' }
]

const state$ = stateSubject
  .startWith(initialState)
  .scan((state, handleEvent) => handleEvent(state))

export default state$
