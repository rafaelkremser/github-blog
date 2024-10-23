import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: end;
  height: 296px;
  background: url("../../src/assets/banner.png");
  background-size: cover;
  background-position: center;
`;

export const IssueCardContainer = styled.div`
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

  article {
    flex: 1;

    div {
      header {
        display: flex;
        justify-content: space-between;
        align-items: start;
        margin-bottom: 1.25rem;

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

      h1 {
        font-size: 1.5rem;
        font-weight: bold;
        color: ${(props) => props.theme["base-title"]};
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

export const IssueTextContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  padding: 2rem 2.5rem;
  margin: -5% auto;
`;
