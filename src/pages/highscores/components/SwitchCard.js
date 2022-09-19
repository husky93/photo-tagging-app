import styled from 'styled-components';
import PropTypes from 'prop-types';
import { darken } from 'polished';

const Figure = styled.figure`
  margin: 0;
  cursor: pointer;
  text-align: center;
  width: 225px;
  background-color: ${(props) => props.theme.lightColor};
  border: 3px ${(props) => darken(0.02, props.theme.lightColor)} solid;
  border-radius: 8px;
  transition: box-shadow 0.25s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: ${(props) =>
    props.active ? `2px 2px 12px 1px rgba(66, 68, 90, 0.4)` : ''};
  &:hover {
    box-shadow: 2px 2px 12px 1px rgba(66, 68, 90, 0.4);
  }
`;

const Image = styled.img`
  width: 100%;
  min-height: 225px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const Caption = styled.figcaption`
  padding: 12px;
  font-weight: 600;
  font-size: 18px;
`;

const SwitchCard = ({ imgSrc, text, handleClick, id, active }) => {
  return (
    <Figure onClick={handleClick} data-id={id} active={active}>
      <Image src={imgSrc} alt={text} data-id={id} />
      <Caption data-id={id}>{text}</Caption>
    </Figure>
  );
};

SwitchCard.propTypes = {
  imgSrc: PropTypes.string,
  text: PropTypes.string,
  active: PropTypes.bool,
  handleClick: PropTypes.func,
  id: PropTypes.string,
};

export default SwitchCard;
