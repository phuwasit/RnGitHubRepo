import * as types from '../actions/types'

export const initialState = {
  data: [],
  error: null,
  isLoading: false,
}

const contributorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CONTRIBUTORS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case types.FETCH_CONTRIBUTORS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null,
      }
    case types.FETCH_CONTRIBUTORS_FAILURE:
      return {
        ...state,
        isLoading: false,
        data: [],
        error: action.payload,
      }
    default:
      return state
  }
}

export default contributorsReducer
