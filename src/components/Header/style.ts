import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--blue);
`;

export const Content = styled.div`
    max-width: 1080px;
    margin: 0 auto;

    padding: 0rem 1rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        color: #fff;
        font-size: 1rem;
        background: var(--bluelight);
        border: 0;
        padding: 1rem 1rem;
        margin-top: 1rem;
        border-radius: 0.25rem;
        transition: 500ms;

        &:hover {
            filter: brightness(0.9);
        }
    }
` 
