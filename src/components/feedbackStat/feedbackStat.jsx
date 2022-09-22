import React, { Component } from 'react';
import { StyledList, ListElement } from './feedbackStat.styled';
import PropTypes from 'prop-types';
class StatList extends Component {
  render() {
    return (
      <StyledList>
        <ListElement>
          Good: <span>{this.props.good}</span>
        </ListElement>
        <ListElement>
          Neutral: <span>{this.props.neutral}</span>
        </ListElement>
        <ListElement>
          Bad: <span>{this.props.bad}</span>
        </ListElement>
        <ListElement>
          Total: <span>{this.props.totalFunc}</span>
        </ListElement>
        <ListElement>
          Positive feedback: <span>{this.props.percentageFunc}%</span>
        </ListElement>
      </StyledList>
    );
  }
}
StatList.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFunc: PropTypes.number.isRequired,
  percentageFunc: PropTypes.number.isRequired,
};
export default StatList;
