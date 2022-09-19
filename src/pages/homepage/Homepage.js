import { useImageLoader } from '../../hooks/hooks';
import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Wrapper from '../../components/Wrapper';
import Spinner from '../../components/Spinner';
import LevelPicker from './components/LevelPicker';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow-right.svg';

const StyledWrapper = styled(Wrapper)`
  background-color: ${(props) => props.theme.lightColor};
  padding: 24px;
  margin: 48px 12px;
  border-radius: 8px;
  border: 3px ${(props) => darken(0.02, props.theme.lightColor)} solid;
  @media (min-width: 1200px) {
    margin: 48px auto;
  }
`;

const Heading = styled.h2`
  font-size: ${(props) => props.size}px;
  font-weight: 700;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Section = styled.section`
  text-align: center;
  padding-top: 36px;
`;

function Homepage() {
  const images = useImageLoader([
    'level-one-sm.jpg',
    'level-two-sm.jpg',
    'level-three-sm.jpg',
  ]);

  return (
    <main className="homepage">
      <Header />
      <Section className="content" aria-label="Content">
        <Heading size="24">Choose a level:</Heading>
        {images !== null ? (
          <Wrapper direction="row" justify="space-around" gap={36} mauto $wrap>
            {images.map((imgSrc, index) => (
              <LevelPicker
                imgSrc={imgSrc}
                text={`Level ${index + 1}`}
                path={`/level-${index + 1}`}
                key={`homepage-card-${index}`}
              />
            ))}
          </Wrapper>
        ) : (
          <Wrapper direction="row" justify="center" gap={36} mauto $wrap>
            <Spinner />
          </Wrapper>
        )}
        <StyledWrapper
          direction="row"
          align="center"
          justify="space-between"
          gap={36}
          mauto
          $wrap
        >
          <h3>Have a look at the High Scores!</h3>
          <StyledLink to="highscores">
            <Button>
              Go to Leaderboards <ArrowRight />
            </Button>
          </StyledLink>
        </StyledWrapper>
      </Section>
      <Footer />
    </main>
  );
}

export default Homepage;
