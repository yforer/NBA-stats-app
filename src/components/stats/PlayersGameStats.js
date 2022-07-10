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

  const formatPlayersStats = (playersStats) => {
    return playersStats.map(
      (player) =>
        (player = {
          name: `${player.player.first_name} ${player.player.last_name}`,
          min: player.min,
          pts: player.pts,
          ast: player.ast,
          reb: player.reb,
          blk: player.blk,
          stl: player.stl,
          dreb: player.dreb,
          oreb: player.oreb,
          fg3a: player.fg3a,
          fg3m: player.fg3m,
          fg3_pct: (player.fg3_pct * 100).toFixed(0) + "%",
          fga: player.fga,
          fgm: player.fgm,
          fg_pct: (player.fg_pct * 100).toFixed(0) + "%",
          fta: player.fta,
          ftm: player.ftm,
          ft_pt: (player.ft_pct * 100).toFixed(0) + "%",
          pf: player.pf,
          turnover: player.turnover,
        })
    );
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
