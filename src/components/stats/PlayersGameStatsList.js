import { Fragment } from "react";
import classes from "./PlayersGameStatsList.module.css";

const PlayersGameStatsList = (props) => {
  const formattedPlayersStats = props.gameStats;
  const playerNames = props.playerNames;
  const categories = props.categories;

  const createContent = (playersStats, categoriesArray) => {
    const dataContent = playersStats.map((player) => (
      <li>
        <div>{player.min}</div>
        <div>{player.pts}</div>
        <div>{player.ast}</div>
        <div>{player.reb}</div>
        <div>{player.blk}</div>
        <div>{player.stl}</div>
        <div>{player.dreb}</div>
        <div>{player.oreb}</div>
        <div>{player.fg3a}</div>
        <div>{player.fg3m}</div>
        <div>{player.fg3_pct}</div>
        <div>{player.fga}</div>
        <div>{player.fgm}</div>
        <div>{player.fg_pct}</div>
        <div>{player.fta}</div>
        <div>{player.ftm}</div>
        <div>{player.ft_pct}</div>
        <div>{player.pf}</div>
        <div>{player.turnover}</div>
      </li>
    ));

    const categoriesContent = (
      <li>
        {categoriesArray.map((category) => (
          <div>{category.toUpperCase()}</div>
        ))}
      </li>
    );

    dataContent.unshift(categoriesContent);
    return dataContent;
  };

  const statsContent = createContent(formattedPlayersStats, categories);

  const playerNamesContent = playerNames.map((player) => <div>{player}</div>);

  return (
    <Fragment>
      <div className={classes.stats}>
        <div className={classes.player}>{playerNamesContent}</div>
        <div className={classes.values}>
          <ul>{statsContent}</ul>
        </div>
      </div>
    </Fragment>
  );
};

export default PlayersGameStatsList;
