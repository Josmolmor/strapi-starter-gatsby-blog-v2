import styled from 'styled-components';
import { TakeNotes } from 'components/Vectors';

export const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-around;
    min-height: 44rem;
`;

export const Form = styled.form`
    background: ${({ theme }) => theme.colors.cardBackground};
    color: ${({ theme }) => theme.colors.typography};
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
    max-width: 30rem;
    padding: 2rem;
    min-width: 30rem;
    max-height: 20rem;
    -webkit-box-shadow: 0 2px 7px 1px rgba(33, 6, 6, 0.2);
    -moz-box-shadow: 0 2px 7px 1px rgba(33, 6, 6, 0.2);
    box-shadow: 0 2px 7px 1px rgba(33, 6, 6, 0.2);

    input {
        margin: 0.5rem 0 1rem;
        padding: 0.5rem;
    }
`;

export const TakeNotesIllustration = styled(TakeNotes)`
    height: 25rem;
    width: auto;
    position: fixed;
    bottom: -3.75rem;
    right: 0;
`;

export const OutputContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
`;
