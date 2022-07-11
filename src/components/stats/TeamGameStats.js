import classes from "./TeamGameStats.module.css";
import { useSelector } from "react-redux";
import TeamGameStatsList from "./TeamGameStatsList";
import {
  playersToTeamStats,
  separatePlayersToTeams,
} from "../../services/teamGameStatsService";

const TeamGameStats = (props) => {
  const gameStats = props.gameStats.data;
  const gameInfo = useSelector((state) => state.stats.gameInfo);

  const homeTeamStats = playersToTeamStats(
    separatePlayersToTeams(gameStats, gameInfo.homeTeam)
  );

  const visitorTeamStats = playersToTeamStats(
    separatePlayersToTeams(gameStats, gameInfo.visitorTeam)
  );

  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <button onClick={props.onClose}>X</button>
        <div className={classes.date}>{gameInfo.date}</div>
        <div className={classes.team}>{gameInfo.homeTeam}</div>
        <div className={classes.team}>{gameInfo.visitorTeam}</div>
      </div>
      <div className={classes.stats}>
        <ul>
          <TeamGameStatsList
            homeTeamStats={homeTeamStats}
            visitorTeamStats={visitorTeamStats}
          />
        </ul>
      </div>
    </div>
  );
};

export default TeamGameStats;
