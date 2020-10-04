import styled from 'styled-components';
import { LetsTalk } from 'components/Vectors';

export const HeroHeader = styled.div`
    background: black;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    overflow: hidden;
    padding: 2rem 3rem;
    position: relative;
    @media (min-width: 640px) {
        flex-direction: row;
        align-items: flex-end;
    }
    &:after {
        content: '';
        background-image: url(https://images.unsplash.com/photo-1521198807864-bc8cfc485949?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format);
        background-size: cover;
        background-position: 50% 50%;
        border-radius: 0.25rem;
        -webkit-filter: blur(1px);
        filter: blur(1px);
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0.25;
    }
`;

export const TitleContent = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 3;

    a {
        margin-top: 1rem;
        max-width: 10rem;
    }
`;

export const HeroText = styled.h1`
    color: white;
    font-size: 2.23125rem;
    line-height: 1;
    margin: 0;
    opacity: 1;
    text-transform: none;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    @media (min-width: 960px) {
        font-size: 2.625rem;
        line-height: 1.2;
        text-shadow: none;
    }
`;

export const SubHeroText = styled.h2`
    color: white;
    font-size: 1.23125rem;
    opacity: 0.9;
    padding-left: 0.5rem;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    @media (min-width: 960px) {
        font-size: 1.625rem;
        text-shadow: none;
    }
`;

export const LetsTalkIllustration = styled(LetsTalk)`
    display: none;
    height: 20rem;
    width: auto;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    @media (min-width: 640px) {
        display: block;
    }
`;
