import { useEffect, useState } from "react";
import classes from "./SearchPlayers.module.css";
import PlayersSearchList from "./PlayersSearchList";
import { getPlayersSearchResults } from "../../services/searchPlayerService";
import LoadingDots from "../UI/LoadingDots";
import { GoSearch } from "react-icons/go";

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
          const data = await getPlayersSearchResults(inputText);
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
    <div className={classes.headline}>
      <h1>Players</h1>
      <div className={classes.search}>
        <div className={classes.bar}>
          <GoSearch size={20} />
          <input
            type="text"
            placeholder={`Search for players`}
            onChange={onChangeHandler}
          ></input>
        </div>

        {isLoading && <LoadingDots />}
        {!isLoading && inputTextIsValid && playersSearchList && (
          <PlayersSearchList playersList={playersSearchList} />
        )}
      </div>
    </div>
  );
};

export default SearchPlayers;
