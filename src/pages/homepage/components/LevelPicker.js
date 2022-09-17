import { useImageLoader } from '../../../hooks/hooks';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Wrapper from '../../../components/Wrapper';

const Figure = styled.figure`
  margin: 0;
  cursor: pointer;
  text-align: center;
  width: 320px;
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
  min-height: 320px;
  object-fit: cover;
`;

const Caption = styled.figcaption`
  padding: 12px;
  font-weight: 600;
  font-size: 18px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.darkColor};
`;

const Character = styled.img`
  width: 36px;
  height: 36px;
  object-fit: cover;
`;

const LevelPicker = ({ imgSrc, text, path }) => {
  const images = useImageLoader(['waldo.png', 'odlaw.png', 'wizard.png']);
  return (
    <StyledLink to={path}>
      <Figure>
        <Image src={imgSrc} alt={text} />
        <Wrapper direction="row" justify="space-between">
          <Caption>{text}</Caption>
          {images !== null ? (
            <Wrapper direction="row" gap={4} align="center">
              <Character alt="Waldo" src={images[0]} />
              <Character alt="Odlaw" src={images[1]} />
              <Character alt="Wizard" src={images[2]} />
            </Wrapper>
          ) : (
            ''
          )}
        </Wrapper>
      </Figure>
    </StyledLink>
  );
};

LevelPicker.propTypes = {
  imgSrc: PropTypes.string,
  text: PropTypes.string,
  path: PropTypes.string,
};

export default LevelPicker;
