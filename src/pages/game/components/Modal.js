import styled from 'styled-components';
import { lighten } from 'polished';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Wrapper from '../../../components/Wrapper';
import Button from '../../../components/Button';
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
  padding: 48px 24px;
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

const Time = styled.strong`
  font-weight: 700;
  font-size: 30px;
  color: ${(props) => props.theme.primaryColor};
  text-shadow: 1px 1px 0px ${(props) => props.theme.secondaryColor};
`;

const Label = styled.label`
  font-size: 14px;
`;

const Input = styled.input`
  border: 2px ${(props) => lighten(0.1, props.theme.primaryColor)} solid;
  background-color: ${(props) => props.theme.lightColor};
  padding: 12px 22px;
  border-radius: 8px;
  color: ${(props) => props.theme.darkColor};
  font-family: 'Noto Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin-bottom: 12px;
  transition: all 0.15s ease;

  &:focus {
    outline: none;
    border: 2px ${(props) => lighten(0.1, props.theme.secondaryColor)} solid;
  }
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
        justify="start"
        gap={16}
      >
        <h2>You completed this level in:</h2>
        <Time>{time}</Time>
        <Wrapper
          direction="column"
          align="center"
          justify="space-around"
          gap={16}
        >
          <Label htmlFor="name">Type your name:</Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Name..."
          />
          {submitting ? (
            <Spinner />
          ) : (
            <Button onClick={handleSubmit}>Submit your score!</Button>
          )}
        </Wrapper>
      </StyledModal>
    </Overlay>
  );
};

Modal.propTypes = {
  time: PropTypes.string.isRequired,
  submitScore: PropTypes.func.isRequired,
};

export default Modal;
