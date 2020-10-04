import styled, { css } from 'styled-components';

export const NavbarRightSide = styled.ul<{ open: boolean }>`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    list-style: none;
    position: relative;
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
        background-color: ${({ theme }) => theme.colors.background};
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

export const CategoriesListBackdrop = styled.div<{ categoriesOpen: boolean }>`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    z-index: 996;
    ${({ categoriesOpen }) =>
        categoriesOpen &&
        css`
            position: initial;
        `}
`;

export const CategoriesList = styled.ul<{ categoriesOpen: boolean }>`
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 0.25rem;
    -webkit-box-shadow: 0 1px 3px 0 rgba(33, 6, 6, 0.5);
    -moz-box-shadow: 0 1px 3px 0 rgba(33, 6, 6, 0.5);
    box-shadow: 0 1px 3px 0 rgba(33, 6, 6, 0.5);
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    padding: 1rem 2rem;
    position: absolute;
    right: 2.5rem;
    top: 2.5rem;
    z-index: 997;

    ${({ categoriesOpen }) =>
        categoriesOpen &&
        css`
            -webkit-box-shadow: none;
            -moz-box-shadow: none;
            box-shadow: none;
            position: initial;
        `};
`;

export const Category = styled.li`
    font-size: 1rem;
    list-style: none;
    a {
        display: flex;
    }
`;
