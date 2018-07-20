import React from 'react'
import PropTypes from 'prop-types'

import Section from './Section'
import Filter from './Filter'
import Spinner from './Spinner'
import RepoList from './RepoList'

const AUTHOR_NOT_FOUND_MESSAGE = `Sorry, we couldn't retrieve any repos for that author.`

const FilterAndList = ({ onChangeFilterText, filterText, results, isLoading, error }) => (
  <div>
    <Section>
      <Filter
        id="accountName"
        label="Filter by account name:"
        filterText={filterText}
        onChangeFilterText={onChangeFilterText} />
    </Section>
    <Section>
      {isLoading
        ? <Spinner />
        : (error
            ? <span>{AUTHOR_NOT_FOUND_MESSAGE}</span>
            : <RepoList
                author={filterText}
                results={results} /> )}
    </Section>
  </div>)

FilterAndList.propTypes = {
  onChangeFilterText: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired,
  results: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default FilterAndList