import React, { Component } from 'react'

export class CustomeTextInput extends Component {
    constructor(props) {
      super(props)
    
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind( this );
    }
    focusTextInput() {
        //Explicityl focus the text input using the row DOM API
        //NOTE:we're accessing "current" to get the DOM node
        this.textInput.current.focus();
    }
  render() {
    return (
        <div>
            <input 
                type="text"
                ref={this.textInput} />
            <input
                type="button"
                onClick={this.focusTextInput}
                value="Focus text input" />
      </div>
    )
  }
}

export default CustomeTextInput