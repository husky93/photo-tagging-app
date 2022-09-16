import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import imagesLoader from '../../modules/imagesLoader';
import Header from '../../components/Header';
import Wrapper from '../../components/Wrapper';
import Spinner from '../../components/Spinner';
import CustomCursor from './components/CustomCursor';
import Popup from './components/Popup';
import ChoiceFeedback from './components/ChoiceFeedback';
import Timer from './components/Timer';
import Characters from './components/Characters';

const Image = styled.img`
  cursor: ${(props) => (props.clicked ? 'pointer' : 'none')};
  overflow: visible;
  width: 1920px;
  height: 1080px;
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
    { name: 'Odlaw', found: false, coords: { x: 656, y: 506 } },
    { name: 'Wizard', found: false, coords: { x: 656, y: 506 } },
  ]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [showFeedback, setShowFeedback] = useState(null);
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
    if (!showFeedback && !isGameOver) {
      setClicked((prevValue) => !prevValue);
    }
  };

  const handlePopupItemClick = (event) => {
    const charName = event.target.dataset.name;
    if (charName && !showFeedback && !isGameOver) {
      const clickedCharacter = characters.find(
        (char) => char.name === charName
      );
      const x = clickedCharacter.coords.x;
      const y = clickedCharacter.coords.y;
      // Check if user clicked on the right area.
      const checkXAxis = x >= mouseX - 40 && x <= mouseX + 40;
      if (checkXAxis) {
        const checkYAxis = y >= mouseY - 40 && y <= mouseY + 40;
        if (checkYAxis) {
          const newCharactersArray = characters.filter(
            (char) => char.name !== charName
          );
          setShowFeedback({ name: charName, mouseX: mouseX, mouseY: mouseY });
          setCharacters(newCharactersArray);
          if (newCharactersArray.length === 0) setIsGameOver(true);
        } else setShowFeedback({ mouseX: mouseX, mouseY: mouseY });
      } else setShowFeedback({ mouseX: mouseX, mouseY: mouseY });
      setClicked((prevValue) => !prevValue);
      setTimeout(() => setShowFeedback(null), 2000);
    }
  };

  const renderGame = () => {
    if (params.id > 3)
      return (
        <Wrapper direction="row" justify="center" align="center">
          <h2>Error 404! Page not found</h2>
        </Wrapper>
      );
    else if (image !== null)
      return (
        <div>
          <Image
            clicked={clicked}
            src={image}
            alt="Game board"
            onMouseMove={handleImageHover}
            onMouseLeave={handleImageHoverLeave}
            onClick={handleImageClick}
          />
        </div>
      );
    else
      return (
        <Wrapper direction="row" justify="center" align="center">
          <Spinner />
        </Wrapper>
      );
  };

  return (
    <main>
      <Header>
        <Timer stop={isGameOver} />
        <Characters characters={characters} />
      </Header>
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
      {showFeedback ? (
        <ChoiceFeedback
          mouseX={showFeedback.mouseX}
          mouseY={showFeedback.mouseY}
          $name={showFeedback.name ? showFeedback.name : false}
        />
      ) : (
        ''
      )}
      {renderGame()}
    </main>
  );
};

export default Game;
