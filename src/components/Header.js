import Wrapper from './Wrapper';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header``;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Logo = styled.h1`
  color: ${(props) => props.theme.primaryColor};
`;

const Header = ({ children }) => {
  return (
    <StyledHeader>
      <Wrapper direction="row">
        <StyledLink to="/">
          <Logo>Where's Waldo</Logo>
        </StyledLink>
        {children ? children : ''}
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
