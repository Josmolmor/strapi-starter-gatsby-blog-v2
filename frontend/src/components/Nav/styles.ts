import styled from 'styled-components';
import { Logo } from 'components/Vectors';

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 997;
`;

export const Container = styled.nav`
    display: flex;
    margin: auto;
    max-width: 1600px;
    justify-content: space-between;
    padding: 1rem;
    width: 95%;
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
