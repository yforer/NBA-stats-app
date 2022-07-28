import { useEffect, useRef, useState } from "react";
import classes from "./PlayerStatsByGame.module.css";
import { useSelector } from "react-redux";
import {
  createGameLinkData,
  formatDateForCompare,
} from "../../services/playerStatsByGameService";
import PlayerSeasonGamesListItem from "./PlayerSeasonGamesListItem.js";

const PlayerStatsByGame = (props) => {
  const seasonYear = useSelector((state) => state.season.season);
  const gameLinksData = createGameLinkData(props.playerGamesStats);
  const startDateInputRef = useRef("");
  const endDateInputRef = useRef("");
  const [gamesListContent, setGamesListContent] = useState();

  const onChangeDateHandler = () => {
    let filteredGamesList;
    if (
      startDateInputRef.current.value.length === 10 &&
      !endDateInputRef.current.value
    ) {
      filteredGamesList = gameLinksData.formattedData.filter(
        (game) =>
          new Date(formatDateForCompare(game.date, seasonYear)) >
          new Date(startDateInputRef.current.value)
      );
    }
    if (
      !startDateInputRef.current.value &&
      endDateInputRef.current.value.length === 10
    ) {
      filteredGamesList = gameLinksData.formattedData.filter(
        (game) =>
          new Date(formatDateForCompare(game.date, seasonYear)) <
          new Date(endDateInputRef.current.value)
      );
    }
    if (
      startDateInputRef.current.value.length === 10 &&
      endDateInputRef.current.value.length === 10
    ) {
      filteredGamesList = gameLinksData.formattedData.filter(
        (game) =>
          new Date(formatDateForCompare(game.date, seasonYear)) >
            new Date(startDateInputRef.current.value) &&
          new Date(formatDateForCompare(game.date, seasonYear)) <
            new Date(endDateInputRef.current.value)
      );
    }
    const filteredGamesListContent = filteredGamesList
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
