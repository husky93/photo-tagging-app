import { useEffect, useState } from 'react';
import { importImage, loadImages } from '../../modules/images';
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
          <div>
            {images.map((imgSrc, index) => (
              <LevelPicker
                imgSrc={imgSrc}
                text={`Level ${index + 1}`}
                path={`/level-${index + 1}`}
                key={`homepage-card-${index}`}
              />
            ))}
          </div>
        </section>
      ) : (
        <Spinner />
      )}
    </main>
  );
}

export default Homepage;
