import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const animate = keyframes`
0% {
  display: block;
  opacity: 0;
}
50%{
  opacity: 1;
}
100% {
  opacity: 0;
  display: none;
}

`;

const Feedback = styled.div`
  display: block;
  position: absolute;
  color: ${(props) => (props.$name ? 'green' : 'red')};
  min-width: 150px;
  height: 150px;
  background-color: #fff;
  left: ${(props) => props.mouseX}px;
  top: ${(props) => props.mouseY}px;
  transition: all 0.25s ease;
  animation: ${animate} 2s;
  z-index: 900;
`;

const ChoiceFeedback = ({ mouseX, mouseY, $name }) => {
  return (
    <Feedback mouseX={mouseX} mouseY={mouseY} $name={$name}>
      {$name ? `You found ${$name}!` : 'Wrong guess, try again!'}
    </Feedback>
  );
};

ChoiceFeedback.propTypes = {
  mouseX: PropTypes.number.isRequired,
  mouseY: PropTypes.number.isRequired,
  $name: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default ChoiceFeedback;
