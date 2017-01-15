import { Subject } from 'rxjs'

export const add$ = new Subject()
export const list$ = new Subject()

export default {
  add$,
  list$,
}
