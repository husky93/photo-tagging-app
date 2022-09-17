import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import firebaseConfig from '../../firebase.config';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDoc, doc } from 'firebase/firestore/lite';
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
import Modal from './components/Modal';

const Image = styled.img`
  cursor: ${(props) => (props.clicked ? 'pointer' : 'none')};
  overflow: visible;
  width: 1920px;
  height: 1080px;
  position: relative;
`;

const Main = styled.main`
  position: relative;
  width: min-content;
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
  const [isGameOver, setIsGameOver] = useState(false);
  const [showFeedback, setShowFeedback] = useState(null);
  const [time, setTime] = useState('0:00');
  const params = useParams();
  const timerRef = useRef();
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  useEffect(() => {
    if (image === null && params.id <= 3) {
      imagesLoader
        .loadImages([imagesLoader.importImage(`level-${params.id}-big.jpg`)])
        .then((value) => setImage(value[0]));
    }
  }, [image, params]);

  const getCoordsFromDatabase = async (level, name) => {
    const lowerCaseName = name.toLowerCase();
    const levelRef = doc(db, 'levels-data', level);
    const levelSnapshot = await getDoc(levelRef);
    return levelSnapshot.data()[lowerCaseName];
  };

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

  const handlePopupItemClick = async (event) => {
    const charName = event.target.dataset.name;
    if (charName && !showFeedback && !isGameOver) {
      const coords = await getCoordsFromDatabase(params.id, charName);
      const x = coords.x;
      const y = coords.y;
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
          if (newCharactersArray.length === 0) {
            setIsGameOver(true);
            setTime(timerRef.current.getTimer());
          }
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
    <Main>
      {isGameOver ? <Modal time={time} /> : ''}
      <Header>
        <Timer ref={timerRef} stop={isGameOver} />
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
    </Main>
  );
};

export default Game;
