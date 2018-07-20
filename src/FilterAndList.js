import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Filter from './Filter'
import RepoList from './RepoList'

const FilterAndList = ({ onChangeFilterText, filterText, results }) => (
  <div>
    <Filter
      id="accountName"
      label="Filter by account name:"
      filterText={filterText}
      onChangeFilterText={onChangeFilterText} />
    <RepoList
      author={filterText}
      results={results}
    />
  </div>)

FilterAndList.propTypes = {
  onChangeFilterText: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired,
  results: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default FilterAndList