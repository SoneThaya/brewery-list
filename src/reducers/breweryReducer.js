import { FETCH_BREWERY_START, FETCH_BREWERY_SUCCESS } from '../actions/index'

const initialState = {
  isFetching: false,
  brewery: "",
  error: "",
}

export const breweryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BREWERY_START:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_BREWERY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        brewery: action.payload
      }
    default:
      return state
  }
}