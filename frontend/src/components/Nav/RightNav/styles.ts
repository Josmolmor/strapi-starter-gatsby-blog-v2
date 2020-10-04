import styled, { css } from 'styled-components';

export const NavbarRightSide = styled.ul<{ open: boolean }>`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    list-style: none;
    ${({ open }) =>
        open
            ? css`
                  -webkit-box-shadow: -5px 0 15px -5px rgba(0, 0, 0, 0.5);
                  -moz-box-shadow: -5px 0 15px -5px rgba(0, 0, 0, 0.5);
                  box-shadow: -5px 0 15px -5px rgba(0, 0, 0, 0.5);
                  > * {
                      font-size: 1.25rem;
                  }
                  > * + * {
                      margin-top: 2rem;
                  }
              `
            : css`
                  > * + * {
                      margin-left: 1rem;
                  }
              `};
    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: white;
        position: fixed;
        transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
        top: 0;
        right: 0;
        height: 100vh;
        width: 16rem;
        margin: 0;
        padding: 6rem 0 0;
        transition: transform 0.15s ease-in;
        z-index: 998;
        li {
            color: #fff;
        }
    }
`;
