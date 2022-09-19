import Wrapper from './Wrapper';
import styled from 'styled-components';
import { darken } from 'polished';

const PaddingWrapper = styled(Wrapper)`
  padding: 36px;
  font-weight: 300;
`;

const Link = styled.a`
  color: ${(props) => props.theme.primaryColor};
  font-weight: 600;
  &:hover {
    color: ${(props) => darken(0.1, props.theme.primaryColor)};
  }
`;

const Footer = () => {
  return (
    <footer>
      <PaddingWrapper direction="row" gap={6} justify="center" mauto>
        <span>Created by</span>
        <Link href="https://github.com/husky93">husky93</Link>
      </PaddingWrapper>
    </footer>
  );
};

export default Footer;
