import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
`;
export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ccc;

`;

export const FormContainer = styled.div`
  position: relative;
  width: 329px;
  padding: 20px 60px;
  border-radius: 20px;
  background: #FFF;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
`;

export const FormTitle = styled.div`
  color: #000;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
  margin-top: 20px;
`;

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #000;
  padding: 8px 0;
  margin-bottom: 20px;
  line-height: 1.2;
  vertical-align: middle;
  box-sizing: border-box;
  font-size: 16px;
  color: black;

  &:focus {
    outline: none;
    border-bottom: 2px solid #8DC646;
    font-size: 18px;
    }

  &::placeholder {
    color: #9A9A9A;
    font-size: 14px;
    }
`;

export const SubmitButton = styled.button`
    padding: 14px 50px;
    border-radius: 10px;
    background: #8DC646;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
    border: none;
    color: white;
    margin-bottom: 30px;
    margin-top: 20px;
    cursor: pointer;
    align-self: center;
`;
