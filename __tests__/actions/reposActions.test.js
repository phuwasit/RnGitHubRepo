import * as types from '../../src/actions/types'
import * as actions from '../../src/actions/reposActions'
import mockStore from '../../config/mock/redux-mock-store'

import mockReposSuccess from '../../__mock__/repos/repos_success.json'
import mockReposFailure from '../../__mock__/repos/repos_failure.json'

describe('actions', () => {
  it('should create a fetchReposRequest action', () => {
    const expectedAction = {
      type: types.FETCH_REPOS_REQUEST,
    }
    expect(actions.fetchReposRequest()).toEqual(expectedAction)
  })

  it('should create a fetchReposSuccess action', () => {
    const expectedAction = {
      type: types.FETCH_REPOS_SUCCESS,
      payload: mockReposSuccess,
    }
    expect(actions.fetchReposSuccess(mockReposSuccess)).toEqual(expectedAction)
  })

  it('should create a fetchReposFailure action', () => {
    const expectedAction = {
      type: types.FETCH_REPOS_FAILURE,
      payload: mockReposFailure,
    }
    expect(actions.fetchReposFailure(mockReposFailure)).toEqual(expectedAction)
  })

  it('should create a selectRepo action', () => {
    const expectedAction = {
      type: types.SELECT_REPO,
      payload: mockReposSuccess[0],
    }
    expect(actions.selectRepo(mockReposSuccess[0])).toEqual(expectedAction)
  })
})

const store = mockStore()

describe('async actions', () => {
  beforeEach(() => {
    store.clearActions()
  })

  it('creates FETCH_REPOS_SUCESS when fetching repos has been done', async () => {
    fetch.mockResponseSuccess(JSON.stringify(mockReposSuccess))

    const expectedActions = [
      { type: types.FETCH_REPOS_REQUEST },
      { type: types.FETCH_REPOS_SUCCESS, payload: mockReposSuccess },
    ]
    await store.dispatch(actions.fetchRepos('facebook'))
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('creates FETCH_REPOS_FAILURE when fetching repos has been done', async () => {
    fetch.mockResponseFailure(JSON.stringify(mockReposFailure))

    const expectedActions = [
      { type: types.FETCH_REPOS_REQUEST },
      { type: types.FETCH_REPOS_FAILURE, payload: mockReposFailure },
    ]
    await store.dispatch(actions.fetchRepos('test'))
    expect(store.getActions()).toEqual(expectedActions)
  })
})

