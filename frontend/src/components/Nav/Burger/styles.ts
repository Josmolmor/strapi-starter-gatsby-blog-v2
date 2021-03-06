import styled, { css, keyframes } from 'styled-components';
import { Moon, Sun } from 'react-feather';
import { rotateIn } from 'react-animations';

const rotateAnimation = keyframes`${rotateIn}`;

export const RotateDiv = styled.div`
    animation: 1s ${rotateAnimation};
`;

export const StyledBurger = styled.div<{ open: boolean }>`
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 2rem;
    right: 2rem;
    z-index: 999;
    display: none;
    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }
    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open, theme }) => (open ? '#ccc' : theme.colors.primary)};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        &:nth-child(1) {
            transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
        }
        &:nth-child(2) {
            transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
            opacity: ${({ open }) => (open ? 0 : 1)};
        }
        &:nth-child(3) {
            transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
        }
    }
`;

const commonToggleCss = css`
    color: ${({ theme }) => theme.colors.navLinks};
    cursor: pointer;
`;

export const MoonButton = styled(Moon)`
    ${commonToggleCss};
`;

export const SunButton = styled(Sun)`
    ${commonToggleCss};
`;
