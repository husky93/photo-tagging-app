import Spinner from '../../components/Spinner';
import { useEffect, useState } from 'react';
import { importImage, loadImages } from '../../modules/images';

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
          {images.map((src) => (
            <img src={src} alt="yo" key={src} />
          ))}
        </section>
      ) : (
        <Spinner />
      )}
    </main>
  );
}

export default Homepage;
