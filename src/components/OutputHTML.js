/* global  require */
/* eslint react/prop-types: 0 */

import React from 'react'
const marked = require('marked')

const OutputHTML = (props) => (
  <div id="preview" dangerouslySetInnerHTML={{__html: marked(props.intext)}}></div>
)
export default OutputHTML
