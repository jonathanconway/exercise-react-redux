import { fetchReposFromGithub } from './githubHttpClient'

const formatResults = results =>
  results.data.map(result => result.name)

const setResults = results => ({
  type: 'SET_RESULTS',
  results
})

const setResultsError = results => ({
  type: 'SET_RESULTS_ERROR'
})

const clearFilterText = () => {
  fetchReposFromGithub.cancel()
  return {
    type: 'CLEAR_FILTER_TEXT'
  }
}

const setFilterText = filterText => ({
  type: 'SET_FILTER_TEXT',
  filterText
})

export const setFilterTextAndFetchResults =
  filterText =>
    dispatch => {
      if (filterText === '') {
        dispatch(clearFilterText())
      }
      else {
        dispatch(setFilterText(filterText))
        fetchReposFromGithub(filterText)
          .then(results => dispatch(setResults(formatResults(results))))
          .catch(() => dispatch(setResultsError()))
      }
    }