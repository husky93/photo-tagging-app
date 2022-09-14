import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LevelPicker = ({ imgSrc, text, path }) => {
  return (
    <Link to={path}>
      <figure>
        <img src={imgSrc} alt={text}></img>
        <figcaption>{text}</figcaption>
      </figure>
    </Link>
  );
};

LevelPicker.propTypes = {
  imgSrc: PropTypes.string,
  text: PropTypes.string,
  path: PropTypes.string,
};

export default LevelPicker;
