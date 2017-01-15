import { add$, list$ } from './events'

// add flow.js payload validation
export function add(data) {
  add$.next(data)
}

export function list(data) {
  list$.next(data)
}

export default {
  add,
  list,
}
