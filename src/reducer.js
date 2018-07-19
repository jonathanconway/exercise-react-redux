const DEFAULT_STATE = {
  results: [],
  filterText: ''
}

const filterableResults = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'SET_FILTER_TEXT':
      return {
        ...state,
        filterText: action.filterText
      }
    case 'SET_RESULTS':
      return {
        ...state,
        results: action.results
      }
    default:
      return state
  }
}

export default filterableResults