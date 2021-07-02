import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: -8rem;

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        color: var(--text-title);
        border-radius: 0.25rem;
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    strong {
        display: block;
        margin-top: 0.5rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem,;
    }

    & div.background-green {
        background-color: var(--green);
    }

`;
