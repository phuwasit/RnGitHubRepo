import reducer, { initialState } from '../../src/reducers/contributorsReducer'
import * as types from '../../src/actions/types'

import mockContributorsSuccess from '../../__mock__/repos/contributors_success.json'
import mockContributorsFailure from '../../__mock__/repos/contributors_failure.json'

describe('contributors reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      data: [],
      error: null,
      isLoading: false,
    }
    expect(reducer(undefined, {})).toEqual(expectedState)
  })

  it('should handle FETCH_CONTRIBUTORS_REQUEST', () => {
    const expectedState = {
      data: [],
      error: null,
      isLoading: true,
    }
    const action = {
      type: types.FETCH_CONTRIBUTORS_REQUEST,
    }
    expect(reducer(initialState, action)).toEqual(expectedState)
  })

  it('should handle FETCH_CONTRIBUTORS_SUCCESS', () => {
    const expectedState = {
      data: mockContributorsSuccess,
      error: null,
      isLoading: false,
    }
    const action = {
      type: types.FETCH_CONTRIBUTORS_SUCCESS,
      payload: mockContributorsSuccess,
    }
    expect(reducer(initialState, action)).toEqual(expectedState)
  })

  it('should handle FETCH_CONTRIBUTORS_FAILURE', () => {
    const expectedState = {
      data: [],
      error: mockContributorsFailure,
      isLoading: false,
    }
    const action = {
      type: types.FETCH_CONTRIBUTORS_FAILURE,
      payload: mockContributorsFailure,
    }
    expect(reducer(initialState, action)).toEqual(expectedState)
  })
})
