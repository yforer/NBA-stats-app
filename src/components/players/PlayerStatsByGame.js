import { useEffect, useRef, useState } from "react";
import classes from "./PlayerStatsByGame.module.scss";
import { useSelector } from "react-redux";
import {
  createGameLinkData,
  filterGamesData,
} from "../../services/playerStatsByGameService";
import PlayerSeasonGamesListItem from "./PlayerSeasonGamesListItem.js";

const PlayerStatsByGame = (props) => {
  const seasonYear = useSelector((state) => state.season.season);
  const gameLinksData = createGameLinkData(props.playerGamesStats);
  const startDateInputRef = useRef("");
  const endDateInputRef = useRef("");
  const [gamesListContent, setGamesListContent] = useState();

  const onChangeDateHandler = () => {
    const filteredGamesList = filterGamesData(
      startDateInputRef,
      endDateInputRef,
      gameLinksData,
      seasonYear
    );
    const filteredGamesListContent = filterGamesData
      ? createContent(filteredGamesList)
      : createContent(gameLinksData.formattedData);
    setGamesListContent(filteredGamesListContent);
  };

  const createContent = (data) => {
    return data.map((game) => (
      <PlayerSeasonGamesListItem
        key={game.id}
        id={game.id}
        date={game.date}
        homeTeam={game.homeTeam}
        visitorTeam={game.visitorTeam}
      />
    ));
  };

  const fullGameslistContent = createContent(gameLinksData.formattedData);

  useEffect(() => {
    setGamesListContent(fullGameslistContent);
  }, []);

  return (
    <div className={classes.games}>
      <div className={classes.headline}>
        <h3>Stats by game</h3>
        <input
          className={classes.from}
          type="text"
          placeholder="From"
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
          min={`${gameLinksData.minDate}`}
          max={`${gameLinksData.maxDate}`}
          onChange={onChangeDateHandler}
          ref={startDateInputRef}
        ></input>
        <input
          className={classes.to}
          type="text"
          placeholder="To"
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
          min={`${gameLinksData.minDate}`}
          max={`${gameLinksData.maxDate}`}
          onChange={onChangeDateHandler}
          ref={endDateInputRef}
        ></input>
      </div>
      <ul>{gamesListContent}</ul>;
    </div>
  );
};

export default PlayerStatsByGame;
