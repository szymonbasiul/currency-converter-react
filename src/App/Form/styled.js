import styled from "styled-components";

export const MainForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px 0;
  padding: 5px;
  width: 100%;
  border: 1px solid #f6dc19;
  height: 100%;
  background-color: #ccc;
  border-radius: 5px;
`;

export const Select = styled.select`
  box-sizing: border-box;
  border: none;
  appearance: none;
  border: 1px solid #f6dc19;
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
  border: 1px solid #f6dc19;
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
  border: 1px solid #ccc;
  padding: 5%;
`;

export const Legend = styled.legend`
  background-color: #f6dc19;
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
  background-color: #f6dc19;
  padding: 15px;

  &:hover {
    cursor: pointer;
    background-color: #fde84c;
  }
  &:active {
    background-color: #fbee8c;
  }
`;
