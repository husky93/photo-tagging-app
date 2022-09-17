import styled from 'styled-components';
import PropTypes from 'prop-types';

const Figure = styled.figure`
  margin: 0;
  cursor: pointer;
  text-align: center;
  width: 225px;
  background-color: ${(props) => props.theme.lightColor};
  border-radius: 8px;
  box-shadow: 1px 1px 2px 0px rgba(66, 68, 90, 0.4);
  transition: box-shadow 0.25s cubic-bezier(0.23, 1, 0.32, 1);
  &:hover {
    box-shadow: 2px 2px 12px 1px rgba(66, 68, 90, 0.4);
  }
`;

const Image = styled.img`
  width: 100%;
  min-height: 225px;
  object-fit: cover;
`;

const Caption = styled.figcaption`
  padding: 12px;
  font-weight: 600;
  font-size: 18px;
`;

const SwitchCard = ({ imgSrc, text, handleClick, id }) => {
  return (
    <Figure onClick={handleClick} data-id={id}>
      <Image src={imgSrc} alt={text} />
      <Caption>{text}</Caption>
    </Figure>
  );
};

SwitchCard.propTypes = {
  imgSrc: PropTypes.string,
  text: PropTypes.string,
};

export default SwitchCard;
