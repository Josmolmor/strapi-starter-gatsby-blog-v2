import styled, { css } from 'styled-components';
import Link from 'components/Link';

const buttonVariants = css<{ variant?: 'ghost'; to?: string }>`
    background: ${({ theme }) => theme.colors.primary};
    border: none;
    border-radius: 0.25rem;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.white};
    display: inline-block;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.5;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.04375rem;
    padding: 0.75rem 1.315rem;
    transition: 0.1s ease-in;
    -webkit-tap-highlight-color: transparent;
    :disabled {
        opacity: 0.4;
    }
    :not(:disabled) {
        cursor: pointer;
    }
    :focus {
        outline: none;
    }
    &:hover {
        filter: brightness(0.9);
    }
    ${({ variant, to }) =>
        (variant &&
            variant === 'ghost' &&
            css`
                background: transparent;
                border: 1px solid ${({ theme }) => theme.colors.navLinks};
                color: ${({ theme }) => theme.colors.navLinks};
                font-weight: normal;
                padding: 0.5rem 0.75rem;
                &:hover {
                    background: ${({ theme }) => theme.colors.primary};
                    border: 1px solid ${({ theme }) => theme.colors.primary};
                    color: ${({ theme }) => theme.colors.white};
                    filter: brightness(100%);
                }
            `) ||
        (to &&
            css`
                &:hover {
                    color: ${({ theme }) => theme.colors.white};
                }
            `)};
`;

export const ButtonDefault = styled.button`
    ${buttonVariants};
`;

export const LinkAsButton = styled(Link)`
    ${buttonVariants};
    &:hover {
        text-decoration: none;
    }
`;
