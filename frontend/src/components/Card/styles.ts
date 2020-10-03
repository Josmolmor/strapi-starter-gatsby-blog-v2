import styled from 'styled-components';
import Img from 'gatsby-image';
import addAlpha from 'utils/addAlpha';

export const Container = styled.div`
    background: ${({ theme }) => theme.colors.cardBackground};
    border: 1px inset rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    display: inline-block;
    -webkit-box-shadow: 0 1px 3px 0 rgba(33, 6, 6, 0.15);
    -moz-box-shadow: 0 1px 3px 0 rgba(33, 6, 6, 0.15);
    box-shadow: 0 1px 3px 0 rgba(33, 6, 6, 0.15);
    &:hover {
        -webkit-box-shadow: 0 2px 7px 1px rgba(33, 6, 6, 0.2);
        -moz-box-shadow: 0 2px 7px 1px rgba(33, 6, 6, 0.2);
        box-shadow: 0 2px 7px 1px rgba(33, 6, 6, 0.2);
    }
`;
export const Content = styled.div``;

export const CardImg = styled(Img)`
    border-radius: 0.5rem 0.5rem 0 0;
`;

export const CardBody = styled.div`
    padding: 1.25rem 1.5rem;
`;

export const CategoryTag = styled.span`
    background-color: ${({ theme }) => addAlpha(theme.colors.primary, 0.1)};
    border-radius: 0.25rem;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
`;

export const UserName = styled.span``;
