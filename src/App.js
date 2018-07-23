import React from 'react';
import { injectGlobal } from 'styled-components'

import { colorText } from './styleVariables'
import FilterableRepoList from './FilterableRepoList'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,500');

  body {
    font-family: 'Source Sans Pro';
    color: ${colorText}
  }
`

export default () => <FilterableRepoList />