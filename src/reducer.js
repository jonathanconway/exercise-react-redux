const DEFAULT_STATE = {
  results: [],
  filterText: '',
  isLoading: false
}

const filterableResults = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'SET_FILTER_TEXT':
      return {
        ...state,
        filterText: action.filterText,
        isLoading: true
      }
    case 'SET_RESULTS':
      return {
        ...state,
        results: action.results,
        isLoading: false
      }
    default:
      return state
  }
}

export default filterableResults