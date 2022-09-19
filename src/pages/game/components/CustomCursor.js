import styled from 'styled-components';
import PropTypes from 'prop-types';

const Cursor = styled.div.attrs((props) => ({
  style: {
    left: props.mouseX - 25 + 'px',
    top: props.mouseY - 25 + 'px',
  },
}))`
  cursor: none;
  position: absolute;
  width: 50px;
  height: 50px;
  background: rgba(1, 1, 1, 0.55);
  z-index: 500;
  pointer-events: none;
  border-radius: 50%;
  border: 2px ${(props) => props.theme.primaryColor} dashed;
`;

const CustomCursor = ({ mouseX, mouseY }) => {
  return <Cursor mouseX={mouseX} mouseY={mouseY} title="Custom cursor" />;
};

CustomCursor.propTypes = {
  mouseX: PropTypes.number.isRequired,
  mouseY: PropTypes.number.isRequired,
};

export default CustomCursor;
