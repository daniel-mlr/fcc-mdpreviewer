/* eslint react/prop-types: 0 */
import React from 'react'

const InputText = (props) => (
  <div className='textarea'>
    <textarea 
      id="editor" name="intext" 
      cols="40" rows="10"
      placeholder={props.placeholder}
      onChange={(event) => props.updateMarkdown(event.target.value)}
    ></textarea>
  </div>
)
export default InputText
