// @flow
import { add$, list$ } from './events'

type Car = {
  name: string,
}

// add flow.js payload validation
export function add(data: Car) {
  add$.next(data)
}

export function list(data: Object) {
  list$.next(data)
}

export default {
  add,
  list,
}
