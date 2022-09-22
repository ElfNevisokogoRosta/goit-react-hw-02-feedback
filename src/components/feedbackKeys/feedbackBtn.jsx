import React, { Component } from 'react';
class FeedbackBtn extends Component {
  render() {
    return <button onClick={this.props.func}>{this.props.value}</button>;
  }
}
export default FeedbackBtn;
