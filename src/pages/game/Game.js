import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import imagesLoader from '../../modules/imagesLoader';
import Header from '../../components/Header';
import Spinner from '../../components/Spinner';
import CustomCursor from './components/CustomCursor';
import Popup from './components/Popup';

const Image = styled.img`
  cursor: ${(props) => (props.clicked ? 'pointer' : 'none')};
  position: relative;
`;

const Game = () => {
  const [image, setImage] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [characters, setCharacters] = useState([
    { name: 'Waldo', found: false, coords: { x: 656, y: 506 } },
    { name: 'Odlaw', found: false, coords: { x: 3, y: 3 } },
    { name: 'Wizard', found: false, coords: { x: 3, y: 3 } },
  ]);
  const [isGameOver, setIsGameOver] = useState(false);
  const params = useParams();

  useEffect(() => {
    if (image === null && params.id <= 3) {
      imagesLoader
        .loadImages([imagesLoader.importImage(`level-${params.id}-big.jpg`)])
        .then((value) => setImage(value[0]));
    }
  }, [image, params]);

  const handleImageHover = (event) => {
    if (!hovered && !clicked) setHovered(true);
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

  const handlePopupItemClick = (event) => {
    const charName = event.target.dataset.name;
    if (charName) {
      const clickedCharacter = characters.find(
        (char) => char.name === charName
      );
      const x = clickedCharacter.coords.x;
      const y = clickedCharacter.coords.y;
      const checkXAxis = x >= mouseX - 40 && x <= mouseX + 40;
      if (checkXAxis) {
        const checkYAxis = y >= mouseY - 40 && y <= mouseY + 40;
        if (checkYAxis) {
          const newCharactersArray = characters.filter(
            (char) => char.name !== charName
          );
          if (newCharactersArray.length > 0) setCharacters(newCharactersArray);
          else setIsGameOver(true);
        }
      }
    }

    setClicked((prevValue) => !prevValue);
  };

  const renderGame = () => {
    if (params.id > 3) return <h2>Error 404! Page not found</h2>;
    else if (image !== null)
      return (
        <Image
          clicked={clicked}
          src={image}
          alt="Game board"
          onMouseMove={handleImageHover}
          onMouseLeave={handleImageHoverLeave}
          onClick={handleImageClick}
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
          handleClick={handleImageClick}
        />
      ) : (
        ''
      )}
      {clicked ? (
        <Popup
          mouseX={mouseX}
          mouseY={mouseY}
          characters={characters}
          handleClick={handlePopupItemClick}
        />
      ) : (
        ''
      )}
      {renderGame()}
    </main>
  );
};

export default Game;
