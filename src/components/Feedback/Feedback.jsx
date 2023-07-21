import React, { Component } from 'react';
import Statistic from 'components/Statistic';
import Notification from 'components/Notification';
import { FeedbackSection, FeedbackTitle, StatTitle } from './Feedback.styled';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  feedbackHandler = feedbackType => {
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  total = () => {
    return this.state.bad + this.state.good + this.state.neutral;
  };
  positivePercentage = () => {
    return Math.round((this.state.good / this.total()) * 100, 2);
  };
  render() {
    const statKeys = Object.keys(this.state);
    return (
      <FeedbackSection>
        <FeedbackTitle>Please leave feedback</FeedbackTitle>
        <FeedbackOptions value={statKeys} func={this.feedbackHandler} />
        <StatTitle>Statistics</StatTitle>
        {this.total() === 0 ? (
          <Notification />
        ) : (
          <Statistic
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            totalFunc={this.total()}
            percentageFunc={this.positivePercentage()}
          />
        )}
      </FeedbackSection>
    );
  }
}
