import Wrapper from './Wrapper';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.bgColor};
  border-bottom: 2px ${(props) => darken(0.02, props.theme.lightColor)} solid;
  padding: 0 12px;
  @media (min-width: 1200px) {
    padding: 0;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Logo = styled.h1`
  color: ${(props) => props.theme.primaryColor};
  font-family: 'Abril Fatface', cursive;
  text-shadow: 1px 1px 0px ${(props) => props.theme.secondaryColor};
`;

const Header = ({ children }) => {
  return (
    <StyledHeader>
      <Wrapper direction="row" align="center" justify="space-between" mauto>
        <StyledLink to="/">
          <Logo>Where's Waldo</Logo>
        </StyledLink>
        {children ? children : ''}
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
