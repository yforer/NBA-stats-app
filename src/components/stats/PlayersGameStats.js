import { useState } from "react";
import { useSelector } from "react-redux";
import classes from "./PlayersGameStats.module.css";
import PlayersGameStatsList from "./PlayersGameStatsList";
import { separatePlayersToTeams } from "../../services/teamGameStatsService";

const PlayersGameStats = (props) => {
  const gameStats = props.gameStats;
  const gameInfo = useSelector((state) => state.stats.gameInfo);
  const [hometeamSelected, setHomeTeamSelected] = useState(true);

  const showHomePlayersStatsHandler = () => {
    setHomeTeamSelected(true);
  };

  const showVisitorPlayersStatsHandler = () => {
    setHomeTeamSelected(false);
  };

  return (
    <div className={classes.container}>
      <div className={classes.date}>
        <button onClick={props.onClose}>X</button>
        {gameInfo.date}
      </div>
      <div className={classes.team}>
        <button
          onClick={showHomePlayersStatsHandler}
          className={hometeamSelected && classes.active}
        >
          {gameInfo.homeTeam}
        </button>
        <button
          onClick={showVisitorPlayersStatsHandler}
          className={!hometeamSelected && classes.active}
        >
          {gameInfo.visitorTeam}
        </button>
      </div>
      <PlayersGameStatsList
        gameStats={
          hometeamSelected
            ? gameStats.homeTeamPlayersStats
            : gameStats.visitorTeamPlayersStats
        }
        playerNames={
          hometeamSelected
            ? gameStats.homeTeamPlayersArray
            : gameStats.visitorTeamPlayersArray
        }
        categories={gameStats.categoriesArray}
      />
    </div>
  );
};

export default PlayersGameStats;
