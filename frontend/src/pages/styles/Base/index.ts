import styled from 'styled-components';

export const Container = styled.div`
    box-sizing: border-box;
    padding-bottom: 4rem;
    @media (min-width: 960px) {
    }
`;

export const HeroHeader = styled.div`
    background: ${({ theme }) => theme.colors.black};
    /* background: -webkit-linear-gradient(to left, #FFC371, #FF5F6D);
  background: linear-gradient(to left, #FFC371, #FF5F6D); */
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 2rem;
    overflow: hidden;
    padding: 3rem;
    position: relative;
    @media (min-width: 640px) {
        flex-direction: row;
        align-items: flex-end;
    }
    @media (min-width: 960px) {
        padding: 4rem;
    }
    &:before {
        content: '';
        background-image: url(https://images.unsplash.com/photo-1513343041531-f73bffeed81b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format);
        background-size: cover;
        background-position: 50% 24%;
        border-radius: 1rem;
        filter: blur(1px);
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0.85;
    }
`;

export const TitleContent = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const ButtonContainer = styled.div`
    margin-top: 1rem;
    position: relative;
    @media (min-width: 640px) {
        margin-top: 0;
    }
`;

export const HeroText = styled.h1`
    color: white;
    font-size: 2.23125rem;
    line-height: 1;
    margin: 0;
    opacity: 1;
    text-transform: none;
    @media (min-width: 960px) {
        font-size: 2.625rem;
        line-height: 1.2;
    }
`;

export const SubHeroText = styled.h2`
    color: white;
    font-size: 1.23125rem;
    opacity: 0.9;
    padding-left: 0.5rem;
    @media (min-width: 960px) {
        font-size: 1.625rem;
    }
`;
