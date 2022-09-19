import styled from 'styled-components';
import { darken } from 'polished';

const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 22px;
  font-family: 'Noto Sans', sans-serif;
  font-weight: 600;
  font-size: 16px;
  border-radius: 8px;
  transition: all 0.15s ease;

  color: ${(props) => props.theme.lightColor};
  background-color: ${(props) => props.theme.primaryColor};
  border: 2px ${(props) => darken(0.03, props.theme.primaryColor)} solid;

  &:hover {
    background-color: ${(props) => darken(0.05, props.theme.primaryColor)};
    border: 2px ${(props) => darken(0.08, props.theme.primaryColor)} solid;
  }
  &:active {
    background-color: ${(props) => darken(0.2, props.theme.primaryColor)};
    border: 2px ${(props) => darken(0.2, props.theme.primaryColor)} solid;
  }
`;

export default Button;
