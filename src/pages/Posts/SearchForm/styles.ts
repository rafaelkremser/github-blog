import styled from "styled-components";

export const SearchPostForm = styled.div`
  margin: 0 auto;
  max-width: 54rem;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    h1 {
      font-size: 1.125rem;
      font-weight: bold;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme["base-span"]};
    }
  }

  form {
    input {
      width: 100%;
      padding: 0.75rem 1rem;
      background: ${(props) => props.theme["base-input"]};
      border: 1px solid ${(props) => props.theme["base-border"]};
      border-radius: 6px;
      color: ${(props) => props.theme["base-text"]};
      transition: all 0.2s;

      ::placeholder {
        color: ${(props) => props.theme["base-label"]};
      }
    }
  }
`;
