import React, { Component } from 'react';
class StatList extends Component {
  render() {
    return (
      <ul>
        <li>
          Good <span>{this.props.good}</span>
        </li>
        <li>
          Neutral <span>{this.props.neutral}</span>
        </li>
        <li>
          Bad <span>{this.props.bad}</span>
        </li>
        <li>
          Total <span>{this.props.totalFunc}</span>
        </li>
        <li>
          Positive feedback: <span>{this.props.percentageFunc}%</span>
        </li>
      </ul>
    );
  }
}
export default StatList;
