import axios from 'axios'
import { debounce } from 'lodash'

const fetchReposFromGithub = filterText =>
  axios(`https://api.github.com/users/${filterText}/repos`)

const formatResults = results =>
  results.data.map(result => result.name)

const setResults = results => ({
  type: 'SET_RESULTS',
  results
})

const setResultsError = results => ({
  type: 'SET_RESULTS_ERROR'
})

const dispatchDebouncedFetchResults = debounce((filterText, dispatch) =>
  fetchReposFromGithub(filterText)
    .then(results => dispatch(setResults(formatResults(results))))
    .catch(() => dispatch(setResultsError()))
, 1000)

const setFilterText = filterText => ({
  type: 'SET_FILTER_TEXT',
  filterText
})

const clearFilterText = () => {
  dispatchDebouncedFetchResults.cancel()
  return {
    type: 'CLEAR_FILTER_TEXT'
  }
}

export const setFilterTextAndFetchResults =
  filterText =>
    dispatch => {
      if (filterText === '') {
        dispatch(clearFilterText())
        return
      }

      dispatch(setFilterText(filterText))
      dispatchDebouncedFetchResults(filterText, dispatch)
    }