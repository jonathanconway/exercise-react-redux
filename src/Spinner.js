import React from 'react'
import styled from 'styled-components'

import { spacingUnit } from './styleVariables'

const Img = styled.img`
  border-radius: ${spacingUnit}px;
`

export default () =>
  <Img
    src="https://i.giphy.com/media/1Ubrzxvik2puE/giphy.webp"
    alt="Loading" />