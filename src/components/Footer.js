import Wrapper from './Wrapper';
import styled from 'styled-components';

const PaddingWrapper = styled(Wrapper)`
  padding: 36px;
`;

const Footer = () => {
  return (
    <footer>
      <PaddingWrapper direction="row" gap={6} justify="center" mauto>
        <span>Created by</span>
        <a href="https://github.com/husky93">husky93</a>
      </PaddingWrapper>
    </footer>
  );
};

export default Footer;
