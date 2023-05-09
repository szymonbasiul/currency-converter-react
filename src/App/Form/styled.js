import styled from "styled-components";

export const MainForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px 0;
  padding: 5px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.yellow};
  height: 100%;
  background-color: ${({ theme }) => theme.color.grey};
  border-radius: 5px;
`;

export const Select = styled.select`
  box-sizing: border-box;
  border: none;
  appearance: none;
  border: 1px solid ${({ theme }) => theme.color.yellow};
  padding: 5px;
  width: 100%;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;

export const Field = styled.input`
  box-sizing: border-box;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.yellow};
  padding: 5px;
  margin: 0;
  border-radius: 5px;

  &:hover {
    cursor: text;
  }
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.color.grey};
  padding: 5%;
`;

export const Legend = styled.legend`
  background-color: ${({ theme }) => theme.color.yellow};
  border-radius: 5px;
  padding: 20px;
  font-weight: 700;
`;

export const Label = styled.label`
  padding: 5px;
`;

export const Text = styled.span`
  width: 100%;
  min-width: 50%;
  display: inline-block;
  margin: 10px 0;
`;

export const Button = styled.button`
  margin: 10px auto;
  width: 100%;
  border: none;
  font-weight: 700;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.yellow};
  padding: 15px;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.lightYellow};
  }
  &:active {
    background-color: ${({ theme }) => theme.color.lighterYellow};
  }
`;
