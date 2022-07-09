import { useState } from "react";
import { useSelector } from "react-redux";
import classes from "./PlayersGameStats.module.css";
import PlayersGameStatsList from "./PlayersGameStatsList";

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

  const separatePlayersToTeams = (team) =>
    gameStats.filter((player) => player.team.full_name === team);

  const homeTeamPlayersStats = separatePlayersToTeams(gameInfo.homeTeam);
  const visitorTeamPlayersStats = separatePlayersToTeams(gameInfo.visitorTeam);

  const formatPlayersStats = (team) => {
    const playersStats = team.map(
      (player) =>
        (player = {
          ast: player.ast,
          blk: player.blk,
          dreb: player.dreb,
          fg3_pct: (player.fg3_pct * 100).toFixed(0) + "%",
          fg3a: player.fg3a,
          fg3m: player.fg3m,
          fg_pct: (player.fg_pct * 100).toFixed(0) + "%",
          fga: player.fga,
          fgm: player.fgm,
          ft_pt: (player.ft_pct * 100).toFixed(0) + "%",
          fta: player.fta,
          ftm: player.ftm,
          min: player.min,
          oreb: player.oreb,
          pf: player.pf,
          pts: player.pts,
          reb: player.reb,
          stl: player.stl,
          turnover: player.turnover,
          name: `${player.player.first_name} ${player.player.last_name}`,
        })
    );
    return playersStats;
  };

  const homeTeamStats = formatPlayersStats(homeTeamPlayersStats);
  const visitorTeamStats = formatPlayersStats(visitorTeamPlayersStats);

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
        chosenTeam={hometeamSelected ? homeTeamStats : visitorTeamStats}
      />
    </div>
  );
};

export default PlayersGameStats;
