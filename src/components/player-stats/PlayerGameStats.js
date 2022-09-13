import classes from "./PlayerGameStats.module.scss";
import { useSelector } from "react-redux";
import { formatPlayerGameData } from "../../services/singlePlayerGameStatsService";
import GameTeamInfo from "./GameTeamInfo";
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
    <li className={classes.item} key={stat.category}>
      <p className={classes['item-category']}>{stat.category}</p>
      <p className={classes['item-value']}>{stat.value}</p>
    </li>
  ));

  return (
    <div className={classes.container}>
      <div className={classes.headline}>
        <CloseButton onClose={props.onClose} />
        <h3>{`${playerData.playerName}`}</h3>
        <p className={classes.header}>Full game stats</p>
        <div className={classes.game}>
          <GameTeamInfo
            isHomeTeam={true}
            team={gameData.homeTeam}
            score={chosenGameData.game.home_team_score}
          />
          <GameTeamInfo
            isHomeTeam={false}
            team={gameData.visitorTeam}
            score={chosenGameData.game.visitor_team_score}
          />
        </div>
      </div>
      <ul className={classes.list}>{gameStatsContent}</ul>
    </div>
  );
};

export default PlayerGameStats;
