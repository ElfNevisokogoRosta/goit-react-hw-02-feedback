import { StyledList, ListElement } from './Statistic.styled';
import PropTypes from 'prop-types';
const Statistic = ({ good, neutral, bad, totalFunc, percentageFunc }) => {
  return (
    <StyledList>
      <ListElement>
        Good: <span>{good}</span>
      </ListElement>
      <ListElement>
        Neutral: <span>{neutral}</span>
      </ListElement>
      <ListElement>
        Bad: <span>{bad}</span>
      </ListElement>
      <ListElement>
        Total: <span>{totalFunc}</span>
      </ListElement>
      <ListElement>
        Positive feedback: <span>{percentageFunc}%</span>
      </ListElement>
    </StyledList>
  );
};
Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFunc: PropTypes.number.isRequired,
  percentageFunc: PropTypes.number.isRequired,
};
export default Statistic;
