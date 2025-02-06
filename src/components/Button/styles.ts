import styled from "@emotion/styled";

interface MainButtonDisable {
  disabled: boolean;
}

export const MainButton = styled.button`
    width: 100%;
    max-height: 80px;
    padding: 20px 54px 20px 54px;
    gap: 10px;
    // задаем условие когда кнопка будет серой,а конда синей
    background-color: ${({disabled}) => disabled? '#bcadad' : 'rgb(66, 72, 253)' }; 
    border: none;
    border-radius: 4px;
    font-size: 24px;
    color: rgb(224, 224, 237);


    &:disabled {
    /* background-color: #bcadad; */ 
    cursor: not-allowed;
    opacity: 0.6; 
  }
`



/* .main-button {
    width: 100%;
    max-height: 80px;
    padding: 20px 54px 20px 54px;
    gap: 10px;
    background-color: rgb(66, 72, 253);
    border: none;
    border-radius: 4px;
    font-size: 24px;
    color: rgb(224, 224, 237);
} */