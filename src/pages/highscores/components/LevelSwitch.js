import SwitchCard from './SwitchCard';
import Wrapper from '../../../components/Wrapper';
import Spinner from '../../../components/Spinner';
import { useImageLoader } from '../../../hooks/hooks';

const LevelSwitch = ({ handleLevelSwitch }) => {
  const images = useImageLoader([
    'level-one-sm.jpg',
    'level-two-sm.jpg',
    'level-three-sm.jpg',
  ]);
  return (
    <Wrapper direction="row" gap={24}>
      {images !== null ? (
        <>
          <SwitchCard
            imgSrc={images[0]}
            text="Level 1"
            handleClick={handleLevelSwitch}
          />
          <SwitchCard
            imgSrc={images[1]}
            text="Level 2"
            handleClick={handleLevelSwitch}
          />
          <SwitchCard
            imgSrc={images[2]}
            text="Level 3"
            handleClick={handleLevelSwitch}
          />
        </>
      ) : (
        <Spinner />
      )}
    </Wrapper>
  );
};

export default LevelSwitch;
