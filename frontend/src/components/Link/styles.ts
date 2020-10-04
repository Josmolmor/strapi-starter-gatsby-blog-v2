import { Link } from 'gatsby';
import styled from 'styled-components';
import addAlpha from 'utils/addAlpha';

const Container = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    filter: brightness(0.75);
  }
  &::selection {
    background: ${({ theme }) => addAlpha(theme.colors.primary, 0.8)};
    color: #fff;
    text-shadow: none;
`;

export default Container;
