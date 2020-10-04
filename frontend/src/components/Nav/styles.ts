import styled from 'styled-components';
import { Logo } from 'components/Vectors';

export const Container = styled.nav`
    margin: auto;
    max-width: 1600px;
    padding: 1rem;
    width: 95%;
    @media (min-width: 640px) {
        padding: 1rem 2.5rem;
    }
`;

export const NavbarLogo = styled(Logo)`
    height: 4rem;
    width: 4rem;
`;

export const NavbarRightSide = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    margin-left: auto;
    > a {
        margin-right: 2rem;
    }
`;
