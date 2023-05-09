import styled from "styled-components";

export const ResultForm = styled.p`
  display: flex;
  justify-content: center;
  padding: 0 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.white};
  font-size: large;
  font-weight: bold;
`;
