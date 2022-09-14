import { useEffect, useState } from 'react';
import { importImage, loadImages } from '../../modules/images';
import Wrapper from '../../components/Wrapper';
import Spinner from '../../components/Spinner';
import LevelPicker from './components/LevelPicker';

function Homepage() {
  const [images, setImages] = useState(null);
  useEffect(() => {
    if (images === null) {
      loadImages([
        importImage('level-one-sm.jpg'),
        importImage('level-two-sm.jpg'),
        importImage('level-three-sm.jpg'),
      ]).then((value) => setImages(value));
    }
  }, [images]);
  return (
    <main className="homepage">
      {images !== null ? (
        <section className="content" aria-label="Content">
          <Wrapper direction="row" gap={36} wrap>
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
