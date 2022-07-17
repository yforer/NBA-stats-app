import classes from "./TeamGameStats.module.css";
import { useSelector } from "react-redux";
import TeamGameStatsList from "./TeamGameStatsList";


const TeamGameStats = (props) => {
  const gameStats = props.gameStats;
  const gameInfo = useSelector((state) => state.stats.gameInfo);

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
            gameStats={gameStats}
          />
        </ul>
      </div>
    </div>
  );
};

export default TeamGameStats;
