import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  min-width: 40%;
  width: 40%;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;
