import React, { Component } from 'react';
import StatList from 'components/feedbackStat';
import FeedbackBtn from 'components/feedbackKeys';
import {
  FeedbackSection,
  FeedbackTitle,
  StatTitle,
  Discription,
} from './feedback.styled';
export default class Feedback extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }
  positiveFeedback = () => {
    this.setState({ good: this.state.good + 1 });
  };
  neutralFeedback = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };
  badFeedback = () => {
    this.setState({ bad: this.state.bad + 1 });
  };
  total = () => {
    return this.state.bad + this.state.good + this.state.neutral;
  };
  percentage = () => {
    return Math.round(
      ((this.state.good + this.state.neutral) / this.total()) * 100,
      2
    );
  };
  render() {
    return (
      <FeedbackSection>
        <FeedbackTitle>Please leave feedback</FeedbackTitle>
        <FeedbackBtn value={'Good'} func={this.positiveFeedback} />
        <FeedbackBtn value={'Neutral'} func={this.neutralFeedback} />
        <FeedbackBtn value={'Bad'} func={this.badFeedback} />
        <StatTitle>Statistics</StatTitle>

        {this.total() === 0 ? (
          <Discription>There is no feedback</Discription>
        ) : (
          <StatList
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            totalFunc={this.total()}
            percentageFunc={this.percentage()}
          />
        )}
      </FeedbackSection>
    );
  }
}
