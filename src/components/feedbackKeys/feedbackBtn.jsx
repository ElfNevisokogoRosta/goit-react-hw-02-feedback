import React, { Component } from 'react';
import { FeedbackBtnStyled } from './feednackBtn.styled';
import PropTypes from 'prop-types';
class FeedbackBtn extends Component {
  render() {
    return (
      <FeedbackBtnStyled type="button" onClick={this.props.func}>
        {this.props.value}
      </FeedbackBtnStyled>
    );
  }
}
FeedbackBtn.propTypes = {
  func: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default FeedbackBtn;
