import PropTypes from 'prop-types';
import styled from 'styled-components';
import Wrapper from '../../../components/Wrapper';
import { darken } from 'polished';

const ListItem = styled.li`
  font-size: 16px;
  border: 3px ${(props) => darken(0.02, props.theme.lightColor)} solid;
  border-radius: 8px;
  padding: 8px 16px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  font-weight: 300;

  & .time {
    color: ${(props) => props.theme.primaryColor};
    font-weight: 600;
  }

  & .number {
    font-weight: 600;
  }
`;

const ScoreItem = ({ number, name, time }) => {
  return (
    <ListItem>
      <Wrapper direction="row" gap={8}>
        <span className="number">{number}.</span>
        <span className="name">{name}</span>
      </Wrapper>

      <span className="time">{time}</span>
    </ListItem>
  );
};

ScoreItem.propTypes = {
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default ScoreItem;
