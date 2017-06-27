import reducer, { initialState } from '../../src/reducers/reposReducer'
import * as types from '../../src/actions/types'

import mockReposSuccess from '../../__mock__/repos/repos_success.json'
import mockReposFailure from '../../__mock__/repos/repos_failure.json'

describe('repos reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      data: [],
      error: null,
      isLoading: false,
      selected: null,
    }
    expect(reducer(undefined, {})).toEqual(expectedState)
  })

  it('should handle FETCH_REPOS_REQUEST', () => {
    const action = {
      type: types.FETCH_REPOS_REQUEST,
    }

    const expectedState = {
      data: [],
      error: null,
      isLoading: true,
      selected: null,
    }
    expect(reducer(initialState, action)).toEqual(expectedState)
  })

  it('should handle FETCH_REPOS_SUCCESS', () => {
    const action = {
      type: types.FETCH_REPOS_SUCCESS,
      payload: mockReposSuccess,
    }
    const expectedState = {
      isLoading: false,
      data: mockReposSuccess,
      error: null,
      selected: null,
    }
    expect(reducer(initialState, action)).toEqual(expectedState)
  })

  it('should handle FETCH_REPOS_FAILURE', () => {
    const action = {
      type: types.FETCH_REPOS_FAILURE,
      payload: mockReposFailure,
    }
    const expectedState = {
      isLoading: false,
      data: [],
      error: mockReposFailure,
      selected: null,
    }
    expect(reducer(initialState, action)).toEqual(expectedState)
  })

  it('should handle SELECT_REPO', () => {
    const action = {
      type: types.SELECT_REPO,
      payload: mockReposSuccess[0],
    }
    const expectedState = {
      data: [],
      error: null,
      isLoading: false,
      selected: mockReposSuccess[0],
    }
    expect(reducer(initialState, action)).toEqual(expectedState)
  })
})
