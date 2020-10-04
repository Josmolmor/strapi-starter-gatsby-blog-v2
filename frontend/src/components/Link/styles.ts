import { Link } from 'gatsby';
import styled from 'styled-components';
import addAlpha from 'utils/addAlpha';

const Container = styled(Link)`
  color: ${({ theme }) => theme.colors.navLinks};
  text-decoration: none;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    filter: brightness(0.9);
  }
  &::selection {
    background: ${({ theme }) => addAlpha(theme.colors.primary, 0.9)};
    color: #fff;
    text-shadow: none;
`;

export default Container;
