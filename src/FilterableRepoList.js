import { connect } from 'react-redux'

import FilterAndList from './FilterAndList'
import { setFilterTextAndFetchResults } from './actions'

const mapStateToProps = state => {
  return {
    filterText: state.filterText,
    results: state.results,
    isLoading: state.isLoading
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onChangeFilterText: filterText => {
      dispatch(setFilterTextAndFetchResults(filterText))
    }
  }
}

const FilterableList = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterAndList)

export default FilterableList