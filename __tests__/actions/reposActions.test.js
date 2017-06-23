import mockStore from '../../config/mock/redux-mock-store'
import * as actions from '../../src/actions/reposActions'

import reposResponseSuccess from '../../__mock__/repos/repos_success.json'
import reposResponseFailure from '../../__mock__/repos/repos_failure.json'

const store = mockStore()

describe('Async repos actions', () => {
  beforeEach(() => {
    store.clearActions()
  })

  it('should response success', async () => {
    fetch.mockResponseSuccess(JSON.stringify(reposResponseSuccess))

    await store.dispatch(actions.fetchReposRequest('facebook', 'react-native'))
    expect(store.getActions()).toMatchSnapshot()
  })

  it('should response failure', async () => {
    fetch.mockResponseFailure(JSON.stringify(reposResponseFailure))

    await store.dispatch(actions.fetchReposRequest('facebook'))
    expect(store.getActions()).toMatchSnapshot()
  })
})
