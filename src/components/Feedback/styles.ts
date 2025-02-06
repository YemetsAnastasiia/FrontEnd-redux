import styled from "@emotion/styled";

export const FeedbackContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 50px;
  width: 450px;
  height: 250px;
  padding: 20px;
  background-color: rgb(173, 229, 248);
  border: 2px solid rgb(40, 103, 103);
  border-radius: 4px;
`;

export const FeedbackButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const FeedbackResultContainer = styled.div`
  position: relative;
  top: 20px;
  font-size: 26px;
  font-weight: bold;
  color: rgb(17, 17, 88);
`;

export const FeedbackResetButton = styled.div`
  position: relative;
  top: 100px;
  right: 330px;
`;

/* .feedback-wrapper {
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 50px;
    width: 450px;
    height: 250px;
    padding: 20px;
    background-color: rgb(173, 229, 248);
    border: 2px solid rgb(40, 103, 103);
    border-radius: 4px;
}

.button-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.result-container {
    position: relative;
    top: 20px;
    font-size: 26px;
    font-weight: bold;
    color: rgb(17, 17, 88);
}

.reset-button-wrapper {
    position: relative;
    top: 100px;
    right: 330px;
} */
