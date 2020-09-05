import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    }
  }

  handleChange = element => {
    this.setState({
      message: element.target.value, 
      })
  }

  ramainingChars() { 
    return this.props.maxChars - this.state.message.length
  }
  

  render() {
    return (
      <div>
        <strong>Your message: </strong>
          <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange}/>
          {this.ramainingChars()}
      </div>
    );
  }
}

export default TwitterMessage;
