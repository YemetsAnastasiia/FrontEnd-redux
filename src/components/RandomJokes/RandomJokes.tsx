import Button from "components/Button/Button";
import { JokeCard, JokesContainer, RandomJokesWrapper, JokeWrapper, JokeText } from "./styles";

// 9
import { useAppDispatch, useAppSelector } from "store/hooks";
import { randomJokesActions, randomJokesSelectors } from "store/redux/randomJokes/randomJokesSlice";
import { v4 } from "uuid";
import Spinner from "components/Spinner/Spinner";

function RandomJokes() {

  // 10
  const {data, error, status} = useAppSelector (randomJokesSelectors.jokeData)
  // 11 
  const dispatch = useAppDispatch();


  // отображаеи данные
  const jokes = data.map((joke) => {
 return <JokeText key= {v4()}> {joke}</JokeText>
  })

  const getJoke = () => {
    dispatch(randomJokesActions.getJoke())
  }



  return (
    <RandomJokesWrapper>
      <JokeCard>
      <Button name='GET JOKES' onClick={getJoke} />
      {status === 'loading' && <Spinner/>}
        <JokesContainer>
          {jokes}
        </JokesContainer>
        <Button name='DELETE JOKES' onClick={() => { }} />
      </JokeCard>
    </RandomJokesWrapper>
  )
}

export default RandomJokes;