import reducer from '../../src/reducers/reposReducer'
import * as types from '../../src/actions/types'

import mockReposSuccess from '../../__mock__/repos/repos_success.json'
import mockReposFailure from '../../__mock__/repos/repos_failure.json'

describe('repos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        data: [],
        error: null,
        isLoading: false,
        selected: null,
      },
    )
  })

  it('should handle FETCH_REPOS_REQUEST', () => {
    const action = {
      type: types.FETCH_REPOS_REQUEST,
    }
    const expectedState = {
      isLoading: true,
    }
    expect(reducer([], action)).toEqual(expectedState)
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
    }
    expect(reducer([], action)).toEqual(expectedState)
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
    }
    expect(reducer([], action)).toEqual(expectedState)
  })

  it('should handle SELECT_REPO', () => {
    const action = {
      type: types.SELECT_REPO,
      payload: mockReposSuccess[0],
    }
    const expectedState = {
      selected: mockReposSuccess[0],
    }
    expect(reducer([], action)).toEqual(expectedState)
  })
})
