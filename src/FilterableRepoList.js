import { connect } from 'react-redux'

import FilterAndList from './FilterAndList'
import { setFilterTextAndFetchResults } from './actions'

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
  onChangeFilterText: filterText => {
    dispatch(setFilterTextAndFetchResults(filterText))
  }
})

const FilterableList = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterAndList)

export default FilterableList