import RxConnect from 'utils/rx-connect'
import Cars from './cars'
import cars$ from 'modules/cars/repository'


export default RxConnect({
  items: cars$,
})(Cars)
