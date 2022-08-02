import classes from "./TeamGameStats.module.css";
import { useSelector } from "react-redux";
import TeamGameStatsList from "./TeamGameStatsList";
import CloseButton from "../UI/CloseButton";

const TeamGameStats = (props) => {
  const gameStats = props.gameStats;
  const gameInfo = useSelector((state) => state.stats.gameInfo);

  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <CloseButton onClose={props.onClose} />
        <h3>Game Teams Stats</h3>
        <p>{gameInfo.date}</p>
      </div>
      <div className={classes.data}>
        <div className={classes.headers}>
          <p>Category</p>
          <p>{gameInfo.homeTeam}</p>
          <p>{gameInfo.visitorTeam}</p>
        </div>
        <div className={classes.stats}>
          <ul>
            <TeamGameStatsList gameStats={gameStats} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamGameStats;
