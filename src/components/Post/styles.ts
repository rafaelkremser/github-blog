import styled from "styled-components";

export const PostCard = styled.div`
  padding: 2rem;
  border-radius: 10px;
  background: ${(props) => props.theme["base-post"]};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  header {
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 1rem;

    h1 {
      color: ${(props) => props.theme["base-title"]};
      font-size: 1.25rem;
      font-weight: bold;
      flex: 1;
    }

    span {
      color: ${(props) => props.theme["base-span"]};
      font-size: 0.875rem;
    }
  }

  p {
    margin-top: 1.25rem;
    max-height: 7rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    color: ${(props) => props.theme["base-text"]};
  }
`;
