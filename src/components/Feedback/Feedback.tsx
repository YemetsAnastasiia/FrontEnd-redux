import Button from "components/Button/Button";
import "./styles.css";
import { useState } from "react";
import {
  FeedbackContainer,
  FeedbackButtonContainer,
  FeedbackResultContainer,
  FeedbackResetButton,
} from "./styles";


function Feedback() {
  const [like, setLikeCount] = useState<number>(0);
  const [dislike, setDislikeCount] = useState<number>(0);

  const likeClick = (): void => {
    setLikeCount((prevStateLike) => {
      return prevStateLike + 1;
    });
  };

  const dislikeClick = (): void => {
    setDislikeCount((prevStateDislike) => {
      return prevStateDislike + 1;
    });
  };

  const resetResults = (): void => {
    setLikeCount(0);
    setDislikeCount(0);
  };

  return (
    <FeedbackContainer>
      <FeedbackResultContainer>{like}</FeedbackResultContainer>
      <FeedbackButtonContainer>
        <Button name="Like" type="button" onClick={likeClick} />
      </FeedbackButtonContainer>
      <FeedbackButtonContainer>
        <Button name="Dislike" type="button" onClick={dislikeClick} />
      </FeedbackButtonContainer>
      <FeedbackResultContainer>{dislike}</FeedbackResultContainer>
      <FeedbackResetButton>
        <Button name="Reset Results" type="button" onClick={resetResults} />
      </FeedbackResetButton>
    </FeedbackContainer>
  );
}

export default Feedback;
