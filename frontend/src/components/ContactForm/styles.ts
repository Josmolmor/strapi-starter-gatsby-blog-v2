import styled, { css } from 'styled-components';
import { TakeNotes } from 'components/Vectors';
import { Instagram, Twitter, Facebook, Youtube } from 'react-feather';

export const Container = styled.div`
    align-items: center;
    flex-direction: column;
    display: flex;
    min-height: 44rem;
`;

export const Content = styled.div`
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: -2rem;
    width: 100%;
`;

export const FormTitle = styled.h1`
    color: ${({ theme }) => theme.colors.typography};
    margin: 1rem 0;
    text-align: center;
`;

export const FormSubTitle = styled.h2`
    color: ${({ theme }) => theme.colors.typography};
    margin: 0 0 3rem;
    max-width: 35rem;
    text-align: center;
`;

export const Form = styled.form`
    background: ${({ theme }) => theme.colors.cardBackground};
    color: ${({ theme }) => theme.colors.typography};
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    max-width: 30rem;
    padding: 2rem;
    min-width: 30rem;
    max-height: 25rem;
    -webkit-box-shadow: 0 2px 7px 1px rgba(33, 6, 6, 0.2);
    -moz-box-shadow: 0 2px 7px 1px rgba(33, 6, 6, 0.2);
    box-shadow: 0 2px 7px 1px rgba(33, 6, 6, 0.2);

    input {
        margin: 0.5rem 0 1rem;
        padding: 0.5rem;
    }

    textarea {
        min-height: 5rem;
        margin: 0.5rem 0 1rem;
        max-width: 29rem;
        padding: 0.5rem;
    }
`;

export const TakeNotesIllustration = styled(TakeNotes)`
    display: none;
    height: 25rem;
    width: auto;
    position: fixed;
    bottom: -3.75rem;
    right: 0;
    @media (min-width: 815px) {
        display: block;
    }
`;

export const OutputContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
`;

export const SocialLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
    @media (min-width: 800px) {
        margin: 2rem 0 0 1rem;
    }
    > * + * {
        margin-top: 1rem;
    }
`;

const commonIconsCss = css`
    cursor: pointer;
    height: 2rem;
    width: 2rem;
`;

export const InstagramIcon = styled(Instagram)`
    ${commonIconsCss};
`;
export const FacebookIcon = styled(Facebook)`
    ${commonIconsCss};
`;
export const TwitterIcon = styled(Twitter)`
    ${commonIconsCss};
`;
export const YoutubeIcon = styled(Youtube)`
    ${commonIconsCss};
`;

export const SocialMedia = styled.a`
    align-items: center;
    color: ${({ theme }) => theme.colors.typography};
    display: flex;
    svg {
        margin-right: 1rem;
    }
    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;
