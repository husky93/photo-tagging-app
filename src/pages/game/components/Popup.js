import styled from 'styled-components';
import PropTypes from 'prop-types';
import { darken } from 'polished';

const StyledPopup = styled.div`
  cursor: pointer;
  position: absolute;
  min-width: 125px;
  border-radius: 8px;
  box-shadow: 2px 2px 12px 1px rgba(66, 68, 90, 0.4);
  background-color: #fff;
  left: ${(props) => props.mouseX}px;
  top: ${(props) => props.mouseY}px;
  z-index: 600;
`;

const CharacterSelection = styled.div`
  padding: 4px;
  text-align: center;
  font-size: 15px;
  border: 3px transparent solid;
  &:hover {
    background-color: ${(props) => props.theme.lightColor};
    border: 3px ${(props) => darken(0.02, props.theme.lightColor)} solid;
    color: ${(props) => props.theme.primaryColor};
  }
  &:first-of-type {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }
  &:last-of-type {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
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
        <CharacterSelection data-name={character.name} key={character.name}>
          {character.name}
        </CharacterSelection>
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
