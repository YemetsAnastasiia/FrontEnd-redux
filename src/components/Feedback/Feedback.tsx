import Button from "components/Button/Button";
import { useState } from "react";
import {
  FeedbackContainer,
  LikeDislikeContainer,
  FeedbackResultContainer,
  Result
 
} from "./styles";

//9 , 10
import { useAppDispatch, useAppSelector } from "store/hooks";
import { feedbackAction, feedbackSelectors } from "store/redux/feedback/feedbackSlice";


function Feedback() {
  //11
  /* const feedbackLike = useAppSelector(feedbackSelectors.fedbackLike)
  const feedbackDeslike = useAppSelector(feedbackSelectors.feedbackDislake) */
  const { likes, dislikes } = useAppSelector(feedbackSelectors.feedbackData);

  //12
  const dispatch = useAppDispatch()

  const onLike = () => {
    dispatch(feedbackAction.like())
  }

  const onDislike = () => {
    dispatch (feedbackAction.dislikes())
  }

  const onReset = () => {
    dispatch (feedbackAction.reset())
  }


  return (
    <FeedbackContainer>
      <FeedbackResultContainer>
        <LikeDislikeContainer>
          <Result>{likes}</Result>
          <Button name="LIKE" type="button" onClick={onLike} />
        </LikeDislikeContainer>
        <LikeDislikeContainer>
          <Result>{dislikes}</Result>
          <Button name="DISLIKE" type="button" onClick={onDislike} />
        </LikeDislikeContainer>
      </FeedbackResultContainer>
      <Button name="RESET RESULTS" type="button" onClick={onReset} />
    </FeedbackContainer>
  );
}

export default Feedback;





/*   const [like, setLikeCount] = useState<number>(0);
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
  }; */

/*   const resetResults = (): void => {
    feedbackLike(0);
    setDislikeCount(0);
  }; */