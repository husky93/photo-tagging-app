import { useEffect, useState } from 'react';
import imagesLoader from '../../modules/imagesLoader';
import Header from '../../components/Header';
import Wrapper from '../../components/Wrapper';
import Spinner from '../../components/Spinner';
import LevelPicker from './components/LevelPicker';

function Homepage() {
  const [images, setImages] = useState(null);
  useEffect(() => {
    if (images === null) {
      imagesLoader
        .loadImages([
          imagesLoader.importImage('level-one-sm.jpg'),
          imagesLoader.importImage('level-two-sm.jpg'),
          imagesLoader.importImage('level-three-sm.jpg'),
        ])
        .then((value) => setImages(value));
    }
  }, [images]);
  return (
    <main className="homepage">
      <Header />
      {images !== null ? (
        <section className="content" aria-label="Content">
          <Wrapper direction="row" gap={36} $wrap>
            {images.map((imgSrc, index) => (
              <LevelPicker
                imgSrc={imgSrc}
                text={`Level ${index + 1}`}
                path={`/level-${index + 1}`}
                key={`homepage-card-${index}`}
              />
            ))}
          </Wrapper>
        </section>
      ) : (
        <Spinner />
      )}
    </main>
  );
}

export default Homepage;
