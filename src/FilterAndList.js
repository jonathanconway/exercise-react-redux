import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Filter from './Filter'
import RepoList from './RepoList'

const ResultsArea = styled.div`
  margin-top: 15px;
`

const Result = styled.div`
  margin-top: 5px;
  padding: 0 5px;
  ${props => props.even ? 'background-color: #efefef;' : ''}
`

const generateRepoLink = (authorName, repoName) =>
  `https://github.com/${authorName}/${repoName}`

const FilterAndList = ({ onChangeFilterText, filterText, results }) => (
  <div>
    <Filter
      id="accountName"
      label="Filter by account name:"
      filterText={filterText}
      onChangeFilterText={onChangeFilterText} />
    <RepoList results={results} />
  </div>)

FilterAndList.propTypes = {
  onChangeFilterText: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired,
  results: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default FilterAndList