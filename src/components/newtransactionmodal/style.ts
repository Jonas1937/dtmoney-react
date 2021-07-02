import styled from 'styled-components';

export const Container = styled.form`
  h2 {
      color: var(--text-title);
      font-size: 1.5rem;
      margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 0.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background: #e7e9ee;

    border: 1px solid #e7e7e7;

    &::placeholder {
        color: var(--text-body);
        padding-left: 1rem;
    }

    & + input {
        margin-top: 1rem;
    }
  }

  button {
      width: 100%;
      height: 4rem;
      background-color: var(--green);
      border-radius: 0.25rem;
      border: 0;
      margin-top: 2rem;
      color: #fff;
      transition: all 0.2s;
      font-weight: 600;

      &:hover {
          filter: brightness(0.9);
      }
  }
`;
