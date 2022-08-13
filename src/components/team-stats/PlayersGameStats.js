import { useState } from "react";
import { useSelector } from "react-redux";
import classes from "./PlayersGameStats.module.css";
import PlayersGameStatsList from "./PlayersGameStatsList";
import CloseButton from "../UI/CloseButton";
import LogoComp from "../UI/LogoComp";

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
      <div className={classes.info}>
        <CloseButton onClose={props.onClose} />
        <h3>Players Game Stats</h3>
        <p>{gameInfo.date}</p>
      </div>
      <div className={classes.team}>
        <button
          onClick={showHomePlayersStatsHandler}
          className={hometeamSelected ? classes.active : undefined}
        >
          <LogoComp id={gameInfo.homeTeamId} />
          <p>{gameInfo.homeTeam}</p>
        </button>
        <button
          onClick={showVisitorPlayersStatsHandler}
          className={!hometeamSelected ? classes.active : undefined}
        >
          <LogoComp id={gameInfo.visitorTeamId} />
          <p>{gameInfo.visitorTeam}</p>
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
