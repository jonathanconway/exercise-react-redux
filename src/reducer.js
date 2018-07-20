const DEFAULT_STATE = {
  results: [],
  filterText: '',
  isLoading: false,
  error: false
}

const filterableResults = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'SET_FILTER_TEXT':
      return {
        ...state,
        filterText: action.filterText,
        isLoading: true,
        error: false
      }
    case 'CLEAR_FILTER_TEXT':
      return {
        ...state,
        results: [],
        filterText: '',
        isLoading: false,
        error: false
      }
    case 'SET_RESULTS':
      return {
        ...state,
        results: action.results,
        isLoading: false,
        error: false
      }
    case 'SET_RESULTS_ERROR':
      return {
        ...state,
        results: [],
        isLoading: false,
        error: true
      }
    default:
      return state
  }
}

export default filterableResults