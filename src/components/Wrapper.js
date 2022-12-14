import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  ${(props) => (props.align ? `align-items: ${props.align};` : '')}
  ${(props) => (props.justify ? `justify-content: ${props.justify};` : '')}
  ${(props) => (props.$wrap ? 'flex-wrap: wrap;' : '')}
  ${(props) => (props.gap ? `gap: ${props.gap}px;` : '')}
  ${(props) => (props.mauto ? `margin: 0 auto; max-width: 1200px;` : '')}
`;

Wrapper.propTypes = {
  direction: PropTypes.oneOf(['column', 'row', 'row-reverse', 'column-reverse'])
    .isRequired,
  align: PropTypes.oneOf([
    'center',
    'flex-start',
    'flex-end',
    'inherit',
    'initial',
    'revert',
    'revert-layer',
    'unset',
  ]),
  justify: PropTypes.oneOf([
    'center',
    'flex-start',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly',
    'stretch',
    'inherit',
    'initial',
    'revert',
    'revert-layer',
    'unset',
  ]),
  $wrap: PropTypes.bool,
  gap: PropTypes.number,
  mauto: PropTypes.bool,
};

export default Wrapper;
