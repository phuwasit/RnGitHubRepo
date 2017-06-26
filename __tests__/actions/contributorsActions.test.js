import * as types from '../../src/actions/types'
import * as actions from '../../src/actions/contributorsActions'
import mockStore from '../../config/mock/redux-mock-store'

import mockContributorsSuccess from '../../__mock__/repos/contributors_success.json'
import mockContributorsFailure from '../../__mock__/repos/contributors_failure.json'

describe('actions', () => {
  it('should create a fetchContributorsRequest action', () => {
    const expectedAction = {
      type: types.FETCH_CONTRIBUTORS_REQUEST,
    }
    expect(actions.fetchContributorsRequest()).toEqual(expectedAction)
  })

  it('should create a fetchContributorsSuccess action', () => {
    const expectedAction = {
      type: types.FETCH_CONTRIBUTORS_SUCCESS,
      payload: mockContributorsSuccess,
    }
    expect(actions.fetchContributorsSuccess(mockContributorsSuccess)).toEqual(expectedAction)
  })

  it('should create a fetchContributorsFailure action', () => {
    const expectedAction = {
      type: types.FETCH_CONTRIBUTORS_FAILURE,
      payload: mockContributorsFailure,
    }
    expect(actions.fetchContributorsFailure(mockContributorsFailure)).toEqual(expectedAction)
  })
})

const store = mockStore()

describe('async actions', () => {
  beforeEach(() => {
    store.clearActions()
  })

  it('creates FETCH_CONTRIBUTORS_SUCESS when fetching repos has been done', async () => {
    fetch.mockResponseSuccess(JSON.stringify(mockContributorsSuccess))

    const expectedActions = [
      { type: types.FETCH_CONTRIBUTORS_REQUEST },
      { type: types.FETCH_CONTRIBUTORS_SUCCESS, payload: mockContributorsSuccess },
    ]
    await store.dispatch(actions.fetchContributors('facebook', 'react-native'))
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('creates FETCH_CONTRIBUTORS_FAILURE when fetching repos has been done', async () => {
    fetch.mockResponseFailure(JSON.stringify(mockContributorsFailure))

    const expectedActions = [
      { type: types.FETCH_CONTRIBUTORS_REQUEST },
      { type: types.FETCH_CONTRIBUTORS_FAILURE, payload: mockContributorsFailure },
    ]
    await store.dispatch(actions.fetchContributors('test', 'demo-app'))
    expect(store.getActions()).toEqual(expectedActions)
  })
})

