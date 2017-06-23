import * as types from './types'

export const fetchRepos = username => async (dispatch) => {
  const uri = `https://api.github.com/users/${username}/repos`

  dispatch(fetchReposRequest())
  try {
    const response = await fetch(uri)
    const repos = await response.json()
    dispatch(fetchReposSuccess(repos))
  } catch (error) {
    dispatch(fetchReposFailure(error))
  }
}

export const fetchReposRequest = () => ({
  type: types.FETCH_REPOS_REQUEST,
})

export const fetchReposSuccess = data => ({
  type: types.FETCH_REPOS_SUCCESS,
  payload: data,
})

export const fetchReposFailure = error => ({
  type: types.FETCH_REPOS_FAILURE,
  payload: error,
})

export const selectRepo = repo => ({
  type: types.SELECT_REPO,
  payload: repo,
})
