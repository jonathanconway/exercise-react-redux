import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Label from './Label'

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

const RepoList = ({ onChangeFilterText, filterText, results }) => (
  <ResultsArea>
    <Label>Repositories ({results.length})</Label>
    {results.map((result, index) =>
      <Result even={((index + 1) % 2 === 0)} key={index}>
        <a href={generateRepoLink(filterText, result)}>{result}</a>
      </Result>
    )}
  </ResultsArea>)

RepoList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default RepoList