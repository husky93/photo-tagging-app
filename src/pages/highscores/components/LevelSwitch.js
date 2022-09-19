import SwitchCard from './SwitchCard';
import Wrapper from '../../../components/Wrapper';
import Spinner from '../../../components/Spinner';
import { useImageLoader } from '../../../hooks/hooks';
import PropTypes from 'prop-types';

const LevelSwitch = ({ active, handleLevelSwitch }) => {
  const images = useImageLoader([
    'level-one-sm.jpg',
    'level-two-sm.jpg',
    'level-three-sm.jpg',
  ]);
  return (
    <Wrapper direction="row" justify="space-around" $wrap gap={24}>
      {images !== null ? (
        <>
          <SwitchCard
            imgSrc={images[0]}
            text="Level 1"
            handleClick={handleLevelSwitch}
            id="1"
            active={active === '1'}
          />
          <SwitchCard
            imgSrc={images[1]}
            text="Level 2"
            handleClick={handleLevelSwitch}
            id="2"
            active={active === '2'}
          />
          <SwitchCard
            imgSrc={images[2]}
            text="Level 3"
            handleClick={handleLevelSwitch}
            id="3"
            active={active === '3'}
          />
        </>
      ) : (
        <Spinner />
      )}
    </Wrapper>
  );
};

LevelSwitch.propTypes = {
  active: PropTypes.string.isRequired,
  handleLevelSwitch: PropTypes.func.isRequired,
};

export default LevelSwitch;
