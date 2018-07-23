import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { spacingUnit, colorStripe } from './styleVariables'
import Label from './Label'

const Result = styled.div`
  margin-top: ${spacingUnit}px;
  padding: 0 ${spacingUnit}px;
  ${props => props.even ? `background-color: ${colorStripe};` : undefined}
`

const generateRepoLink = (author, repoName) =>
  `https://github.com/${author}/${repoName}`

const RepoList = ({ author, results }) => (
  <div>
    <Label>Repositories ({results.length})</Label>
    {results.map((result, index) =>
      <Result even={((index + 1) % 2 === 0)} key={index}>
        <a target="_blank" href={generateRepoLink(author, result)}>{result}</a>
      </Result>
    )}
  </div>)

RepoList.propTypes = {
  author: PropTypes.string.isRequired,
  results: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default RepoList