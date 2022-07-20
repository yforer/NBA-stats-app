import { useEffect, useState } from "react";
import classes from "./SearchPlayers.module.css";
import PlayersSearchList from "./PlayersSearchList";
import { getPlayersSearchResultsAPI } from "../../services/BallDontLieAPIClient";
import LoadingDots from "../UI/LoadingDots";

const SearchPlayers = () => {
  const [playersSearchList, setPlayersSearchList] = useState();
  const [inputText, setInputText] = useState();
  const [inputTextIsValid, setInputTextIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getPlayersSearchMatches = async () => {
      try {
        if (inputTextIsValid) {
          setIsLoading(true);
          const data = await getPlayersSearchResultsAPI(inputText);
          setPlayersSearchList(data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getPlayersSearchMatches();
  }, [inputText, inputTextIsValid]);

  const onChangeHandler = (event) => {
    setInputText(event.target.value);
    setInputTextIsValid(inputText && event.target.value.length > 2);
  };

  return (
    <div className={classes.search}>
      <h2>search player by name</h2>
      <input
        type="text"
        placeholder="player name"
        onChange={onChangeHandler}
      ></input>
      <ul>
        {isLoading && <LoadingDots />}
        {!isLoading && inputTextIsValid && playersSearchList && (
          <PlayersSearchList playersList={playersSearchList} />
        )}
      </ul>
    </div>
  );
};

export default SearchPlayers;
