import React from 'react';
import { injectGlobal } from 'styled-components'

import FilterableList from './FilterableList.container'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,500');

  body, input, label, a {
    font-family: 'Source Sans Pro';
  }`

const App = () => (
  <div>
    <FilterableList />
  </div>
)

export default App;