import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledPopup = styled.div`
  cursor: pointer;
  position: absolute;
  min-width: 150px;
  height: 150px;
  background-color: #fff;
  left: ${(props) => props.mouseX}px;
  top: ${(props) => props.mouseY}px;
  z-index: 999;
`;

const Popup = ({ mouseX, mouseY, characters, handleClick }) => {
  return (
    <StyledPopup
      role="dialog"
      mouseX={mouseX}
      mouseY={mouseY}
      onClick={handleClick}
    >
      {characters.map((character) => (
        <div data-name={character.name} key={character.name}>
          {character.name}
        </div>
      ))}
    </StyledPopup>
  );
};

Popup.propTypes = {
  mouseX: PropTypes.number.isRequired,
  mouseY: PropTypes.number.isRequired,
  characters: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Popup;
