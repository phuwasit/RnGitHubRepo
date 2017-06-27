import * as types from '../actions/types'

export const initialState = {
  data: [],
  error: null,
  isLoading: false,
  selected: null,
}

const reposReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REPOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case types.FETCH_REPOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null,
      }
    case types.FETCH_REPOS_FAILURE:
      return {
        ...state,
        isLoading: false,
        data: [],
        error: action.payload,
      }
    case types.SELECT_REPO:
      return { ...state, selected: action.payload }
    default:
      return state
  }
}

export default reposReducer
