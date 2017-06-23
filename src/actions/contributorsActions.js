import * as types from './types'

export const fetchContributors = (owner, repoName) => async (dispatch) => {
  const uri = `https://api.github.com/repos/${owner}/${repoName}/contributors`

  dispatch(fetchContributorsRequest())
  try {
    const response = await fetch(uri)
    const repos = await response.json()
    dispatch(fetchContributorsSuccess(repos))
  } catch (error) {
    dispatch(fetchContributorsFailure(error))
  }
}

export const fetchContributorsRequest = () => ({
  type: types.FETCH_CONTRIBUTORS_REQUEST,
})

export const fetchContributorsSuccess = data => ({
  type: types.FETCH_CONTRIBUTORS_SUCCESS,
  payload: data,
})

export const fetchContributorsFailure = error => ({
  type: types.FETCH_CONTRIBUTORS_FAILURE,
  payload: error,
})
