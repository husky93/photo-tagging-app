import useImageLoader from '../../hooks/useImageLoader';
import Header from '../../components/Header';
import Wrapper from '../../components/Wrapper';
import Spinner from '../../components/Spinner';
import LevelPicker from './components/LevelPicker';

function Homepage() {
  const images = useImageLoader([
    'level-one-sm.jpg',
    'level-two-sm.jpg',
    'level-three-sm.jpg',
  ]);

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
