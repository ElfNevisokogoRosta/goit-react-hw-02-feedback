import React from 'react';
import { FeedbackBtnStyled } from './FeednackBtn.styled';
import PropTypes from 'prop-types';
const FeedbackOptions = ({ value, func }) => {
  return (
    <>
      {value.map(value => {
        return (
          <FeedbackBtnStyled
            key={value}
            type="button"
            onClick={() => func(value)}
          >
            {value}
          </FeedbackBtnStyled>
        );
      })}
    </>
  );
};
FeedbackOptions.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
  func: PropTypes.func.isRequired,
};

export default FeedbackOptions;
