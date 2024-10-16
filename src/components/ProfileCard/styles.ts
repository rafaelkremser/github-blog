import styled from "styled-components";

export const ProfileCardContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  padding: 2rem 2.5rem;
  margin: -5% auto 5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  background: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;

  img {
    width: 148px;
    border-radius: 8px;
  }

  article {
    div {
      header {
        display: flex;
        justify-content: space-between;
        align-items: start;
        margin-bottom: 0.5rem;

        h1 {
          font-size: 1.5rem;
          font-weight: bold;
          color: ${(props) => props.theme["base-title"]};
        }

        a {
          display: flex;
          align-items: center;
          gap: 0.5rem;

          font-weight: bold;
          color: ${(props) => props.theme.blue};
          font-size: 0.75rem;
          text-decoration: none;
        }
      }
    }

    footer {
      display: flex;
      gap: 1.5rem;
      margin-top: 1.5rem;

      div {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        color: ${(props) => props.theme["base-subtitle"]};

        svg {
          color: ${(props) => props.theme["base-label"]};
        }
      }
    }
  }
`;
