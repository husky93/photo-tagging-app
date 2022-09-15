import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import imagesLoader from '../../modules/imagesLoader';
import Header from '../../components/Header';
import Spinner from '../../components/Spinner';
import CustomCursor from './components/CustomCursor';

const Image = styled.img`
  cursor: none;
  position: relative;
`;

const Game = () => {
  const [image, setImage] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [characters, setCharacters] = useState([
    { name: 'Waldo', found: false },
    { name: 'Odlaw', found: false },
    { name: 'Wizard', found: false },
  ]);
  const params = useParams();

  useEffect(() => {
    if (image === null && params.id <= 3) {
      imagesLoader
        .loadImages([imagesLoader.importImage(`level-${params.id}-big.jpg`)])
        .then((value) => setImage(value[0]));
    }
  }, [image, params]);

  const handleImageHover = (event) => {
    if (!hovered) setHovered(true);
    if (!clicked) {
      setMouseX(event.pageX);
      setMouseY(event.pageY);
    }
  };

  const handleImageHoverLeave = () => {
    if (hovered) setHovered(false);
  };

  const handleImageClick = () => {
    setClicked((prevValue) => !prevValue);
  };

  const renderGame = () => {
    if (params.id > 3) return <h2>Error 404! Page not found</h2>;
    else if (image !== null)
      return (
        <Image
          src={image}
          alt="Game board"
          onMouseMove={handleImageHover}
          onMouseLeave={handleImageHoverLeave}
          ocClick={handleImageClick}
        />
      );
    else return <Spinner />;
  };

  return (
    <main>
      <Header />
      {hovered ? (
        <CustomCursor
          mouseX={mouseX}
          mouseY={mouseY}
          handleHover={handleImageHover}
        />
      ) : (
        ''
      )}
      {renderGame()}
    </main>
  );
};

export default Game;
