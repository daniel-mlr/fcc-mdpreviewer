import React, {Component} from 'react'
import Header from './Header'
import InputText from './InputText'
import OutputHTML from './OutputHTML'

class MdPreviewer extends Component {
  placeholder='Enter markdown text here...'
  state = {
    markdown: '<p>Your formatted text will appear here</p>'
  }
  updateMarkdown = (markdown) => {
    this.setState({markdown})
  }
  render() {
    return (
      <div>
        <Header></Header>
        <div className='container container__app'>
          <div className='intext'>
            <InputText
              placeholder={this.placeholder}
              updateMarkdown={ this.updateMarkdown }>
            </InputText>
          </div>
          <div className='outtext'>
            <OutputHTML className='outtext' intext={ this.state.markdown }>
            </OutputHTML>
          </div>
        </div>
      </div>
    )
  }
}
export default MdPreviewer
