import styled, { keyframes } from "styled-components";

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

export const Load = styled.div`
  display: flex;
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.apple};
`;

const spinner = keyframes`
0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  margin: auto;
  border: 16px solid ${({ theme }) => theme.color.yellow};
  border-top: 16px solid ${({ theme }) => theme.color.apple};
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: ${spinner} 1s linear infinite;
`;

export const Crash = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.cardinal};
`;
