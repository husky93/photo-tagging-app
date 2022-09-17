import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListItem = styled.li`
  font-size: 16px;
`;

const ScoreItem = ({ name, time }) => {
  return (
    <ListItem>
      <span>{name}</span>
      <span>{time}</span>
    </ListItem>
  );
};

ScoreItem.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default ScoreItem;
