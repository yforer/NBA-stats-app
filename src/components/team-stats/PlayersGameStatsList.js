import { Fragment } from "react";
import classes from "./PlayersGameStatsList.module.css";

const PlayersGameStatsList = (props) => {
  const formattedPlayersStats = props.gameStats;
  const playerNames = props.playerNames;
  const categories = props.categories;

  const createContent = (playersStats, categoriesArray) => {
    const dataContent = playersStats.map((player, index) => (
      <li key={player.index}>
        <p>{player.min}</p>
        <p>{player.pts}</p>
        <p>{player.ast}</p>
        <p>{player.reb}</p>
        <p>{player.blk}</p>
        <p>{player.stl}</p>
        <p>{player.dreb}</p>
        <p>{player.oreb}</p>
        <p>{player.fg3a}</p>
        <p>{player.fg3m}</p>
        <p>{player.fg3_pct}</p>
        <p>{player.fga}</p>
        <p>{player.fgm}</p>
        <p>{player.fg_pct}</p>
        <p>{player.fta}</p>
        <p>{player.ftm}</p>
        <p>{player.ft_pct}</p>
        <p>{player.pf}</p>
        <p>{player.turnover}</p>
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
