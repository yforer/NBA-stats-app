import classes from "./PlayerGameStats.module.css";
import { useSelector } from "react-redux";
import { formatPlayerGameData } from "../../services/singlePlayerGameStatsService";
import GameVisitorTeamInfo from "./GameVisitorTeamImfo";
import GameHomeTeamInfo from "./GameHomeTeamInfo";
import CloseButton from "../UI/CloseButton";

const PlayerGameStats = (props) => {
  const gameData = useSelector((state) => state.player.gameData);
  const playerGamesStats = useSelector(
    (state) => state.player.playerGamesStats
  );
  const playerData = useSelector((state) => state.player.playerData);
  const chosenGameData = playerGamesStats.find(
    (game) => game.game.id === gameData.gameId
  );

  const formattedGameStats = formatPlayerGameData(chosenGameData);

  const gameStatsContent = formattedGameStats.map((stat) => (
    <li key={stat.category}>
      <div>{stat.category}</div>
      <div>{stat.value}</div>
    </li>
  ));

  return (
    <div className={classes.container}>
      <div className={classes.headline}>
        <CloseButton onClose={props.onClose} />
        <h2>{`${playerData.playerName}`}</h2>
        <p className={classes.header}>Full game stats</p>
        <div className={classes.game}>
          <GameHomeTeamInfo
            homeTeam={gameData.homeTeam}
            score={chosenGameData.game.home_team_score}
          />
          <GameVisitorTeamInfo
            visitorTeam={gameData.visitorTeam}
            score={chosenGameData.game.visitor_team_score}
          />
        </div>
      </div>
      <ul>{gameStatsContent}</ul>
    </div>
  );
};

export default PlayerGameStats;
