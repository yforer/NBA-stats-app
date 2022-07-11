import { useState } from "react";
import { useSelector } from "react-redux";
import classes from "./PlayersGameStats.module.css";
import PlayersGameStatsList from "./PlayersGameStatsList";
import { separatePlayersToTeams } from "../../services/teamGameStatsService";

const PlayersGameStats = (props) => {
  const gameStats = props.gameStats.data;
  const gameInfo = useSelector((state) => state.stats.gameInfo);
  const [hometeamSelected, setHomeTeamSelected] = useState(true);

  const showHomePlayersStatsHandler = () => {
    setHomeTeamSelected(true);
  };

  const showVisitorPlayersStatsHandler = () => {
    setHomeTeamSelected(false);
  };

  const homeTeamPlayersStats = separatePlayersToTeams(
    gameStats,
    gameInfo.homeTeam
  );
  const visitorTeamPlayersStats = separatePlayersToTeams(
    gameStats,
    gameInfo.visitorTeam
  );

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
        chosenTeam={
          hometeamSelected ? homeTeamPlayersStats : visitorTeamPlayersStats
        }
      />
    </div>
  );
};

export default PlayersGameStats;
