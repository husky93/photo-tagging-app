import { useState, useEffect } from 'react';
import { useImageLoader } from '../../../hooks/hooks';
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
  const images = useImageLoader(['waldo.png', 'odlaw.png', 'wizard.png']);
  const [isFound, setIsFound] = useState({
    waldo: false,
    oldaw: false,
    wizard: false,
  });

  useEffect(() => {
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
  }, [characters]);

  return (
    <div>
      {images !== null ? (
        <Wrapper direction="row" gap={12}>
          <Wrapper direction="column">
            <Image src={images[0]} found={isFound.waldo} alt="Waldo" />
            <span>Waldo</span>
          </Wrapper>
          <Wrapper direction="column">
            <Image src={images[1]} found={isFound.odlaw} alt="Odlaw" />
            <span>Odlaw</span>
          </Wrapper>
          <Wrapper direction="column">
            <Image src={images[2]} found={isFound.wizard} alt="Wizard" />
            <span>Wizard</span>
          </Wrapper>
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
