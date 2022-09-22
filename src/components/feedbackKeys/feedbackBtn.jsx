import React, { Component } from 'react';
import { FeedbackBtnStyled } from './feednackBtn.styled';
class FeedbackBtn extends Component {
  render() {
    return (
      <FeedbackBtnStyled type="button" onClick={this.props.func}>
        {this.props.value}
      </FeedbackBtnStyled>
    );
  }
}
export default FeedbackBtn;
