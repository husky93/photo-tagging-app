import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Wrapper from '../../../components/Wrapper';
import Spinner from '../../../components/Spinner';

const Overlay = styled(Wrapper)`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 700;
`;

const StyledModal = styled(Wrapper)`
  width: 500px;
  height: 500px;
  background-color: ${(props) => props.theme.bgColor};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  border-radius: 8px;
`;

const Modal = ({ time, submitScore }) => {
  const [visible, setVisible] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleOverlayClick = () => {
    setVisible(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async () => {
    if (inputValue) {
      setSubmitting(true);
      await submitScore(inputValue, time);
      navigate('/highscores');
    }
  };

  return (
    <Overlay
      onClick={handleOverlayClick}
      align="center"
      justify="center"
      visible={visible}
    >
      <StyledModal
        onClick={(e) => e.stopPropagation()}
        direction="column"
        align="center"
      >
        <h2>You completed this level in:</h2>
        <strong>{time}</strong>
        <label htmlFor="name">Type your name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={inputValue}
          onChange={handleInputChange}
        />
        {submitting ? (
          <Spinner />
        ) : (
          <button onClick={handleSubmit}>Submit your score!</button>
        )}
      </StyledModal>
    </Overlay>
  );
};

Modal.propTypes = {
  time: PropTypes.string.isRequired,
  submitScore: PropTypes.func.isRequired,
};

export default Modal;
