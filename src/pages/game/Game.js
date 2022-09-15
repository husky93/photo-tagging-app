import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import imagesLoader from '../../modules/imagesLoader';
import Header from '../../components/Header';
import Spinner from '../../components/Spinner';

const Game = () => {
  const [image, setImage] = useState(null);
  const params = useParams();

  useEffect(() => {
    if (image === null && params.id <= 3) {
      imagesLoader
        .loadImages([imagesLoader.importImage(`level-${params.id}-big.jpg`)])
        .then((value) => setImage(value[0]));
    }
  }, [image, params]);

  const renderGame = () => {
    if (params.id > 3) return <h2>Error 404! Page not found</h2>;
    else if (image !== null) return <img src={image} alt="Game board" />;
    else return <Spinner />;
  };

  return (
    <main>
      <Header />
      {renderGame()}
    </main>
  );
};

export default Game;
