import classes from "./TeamGameStats.module.css";
import { useSelector } from "react-redux";
import TeamGameStatsList from "./TeamGameStatsList";

const TeamGameStats = (props) => {
  const gameStats = props.gameStats.data;
  const gameInfo = useSelector((state) => state.stats.gameInfo);

  const teamPlayersStats = (team) =>
    gameStats.filter((player) => player.team.full_name === team);

  const homeTeamPlayersStats = teamPlayersStats(gameInfo.homeTeam);
  const visitorTeamPlayersStats = teamPlayersStats(gameInfo.visitorTeam);

  const playersToTeamStats = (teamStats) => {
    const teamGameStats = teamStats.reduce((total, item) => {
      Object.keys(item).forEach((key) => {
        total[key] = (total[key] || 0) + item[key];
      });
      return total;
    }, {});
    [
      "game",
      "id",
      "min",
      "player",
      "team",
      "fg3_pct",
      "fg_pct",
      "ft_pct",
    ].forEach((key) => delete teamGameStats[key]);

    const numberToPercet = (stat) => (stat * 100).toFixed(0) + "%";
    teamGameStats.fg3_pct = numberToPercet(
      teamGameStats.fg3m / teamGameStats.fg3a
    );
    teamGameStats.fg_pct = numberToPercet(
      teamGameStats.fgm / teamGameStats.fga
    );
    teamGameStats.ft_pct = numberToPercet(
      teamGameStats.ftm / teamGameStats.fta
    );
    return teamGameStats;
  };

  const homeTeamStats = playersToTeamStats(homeTeamPlayersStats);
  const visitorTeamStats = playersToTeamStats(visitorTeamPlayersStats);

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
