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

const generateRepoLink = (author, repoName) =>
  `https://github.com/${author}/${repoName}`

const RepoList = ({ author, results }) => (
  <ResultsArea>
    <Label>Repositories ({results.length})</Label>
    {results.map((result, index) =>
      <Result even={((index + 1) % 2 === 0)} key={index}>
        <a target="_blank" href={generateRepoLink(author, result)}>{result}</a>
      </Result>
    )}
  </ResultsArea>)

RepoList.propTypes = {
  author: PropTypes.string.isRequired,
  results: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default RepoList