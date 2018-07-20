import React from 'react';
import { injectGlobal } from 'styled-components'

import FilterableRepoList from './FilterableRepoList'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,500');

  body, input, label, a {
    font-family: 'Source Sans Pro';
  }`

const App = () => (
  <div>
    <FilterableRepoList />
  </div>
)

export default App;