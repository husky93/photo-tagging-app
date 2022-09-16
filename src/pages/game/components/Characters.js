import { useState, useEffect } from 'react';
import imagesLoader from '../../../modules/imagesLoader';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Wrapper from '../../../components/Wrapper';

const Image = styled.img`
  opacity: ${(props) => (props.found ? 0.25 : 1)};
  transition: opacity 0.2s ease;
  width: 50px;
  height: 50px;
`;

const Characters = ({ characters }) => {
  const [images, setImages] = useState(null);
  const [isFound, setIsFound] = useState({
    waldo: false,
    oldaw: false,
    wizard: false,
  });

  useEffect(() => {
    if (images === null) {
      imagesLoader
        .loadImages([
          imagesLoader.importImage('waldo.png'),
          imagesLoader.importImage('odlaw.png'),
          imagesLoader.importImage('wizard.png'),
        ])
        .then((value) => setImages(value));
    }
    const isWaldoFound =
      characters.find((char) => char.name === 'Waldo') === undefined;
    const isOdlawFound =
      characters.find((char) => char.name === 'Odlaw') === undefined;
    const isWizardFound =
      characters.find((char) => char.name === 'Wizard') === undefined;

    setIsFound({
      waldo: isWaldoFound,
      odlaw: isOdlawFound,
      wizard: isWizardFound,
    });
  }, [images, characters]);

  return (
    <div>
      {images !== null ? (
        <Wrapper direction="row">
          <Image src={images[0]} found={isFound.waldo} alt="Waldo" />
          <Image src={images[1]} found={isFound.odlaw} alt="Odlaw" />
          <Image src={images[2]} found={isFound.wizard} alt="Wizard" />
        </Wrapper>
      ) : (
        ''
      )}
    </div>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Characters;
