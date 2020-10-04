import styled from 'styled-components';

export const Container = styled.div`
    background: ${({ theme }) => theme.colors.background};
    margin: 0 auto;
    padding: 1rem 2rem;
`;

export default Container;
