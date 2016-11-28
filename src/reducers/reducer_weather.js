import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([ action.payload.data ]) => this means exactly the same as the code below, both ways are fine
      return [ action.payload.data, ...state ]
  }

  return state
}
