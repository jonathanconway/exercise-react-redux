import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Label from './Label'

const Input = styled.input`
  border: solid 1px black;
  border-radius: 5px;
  border-top-width: 2px;
  border-left-width: 2px;
  font-size: 15px;
  height: 25px;
  padding: 2px 6px;
  outline: none;
`

const Filter = ({ id, label, onChangeFilterText, filterText }) => (
  <div>
    <Label htmlFor={id}>{label}</Label>
    <Input
      id={id}
      type="text"
      onChange={(e) => onChangeFilterText(e.target.value)}
      value={filterText}
      autoFocus
    />
  </div>)

Filter.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChangeFilterText: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired
}

export default Filter