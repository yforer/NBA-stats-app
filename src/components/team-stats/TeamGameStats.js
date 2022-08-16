import classes from "./TeamGameStats.module.scss";
import { useSelector } from "react-redux";
import TeamGameStatsList from "./TeamGameStatsList";
import CloseButton from "../UI/CloseButton";
import LogoComp from "../UI/LogoComp";

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
          <div></div>
          <div className={classes.logo}>
            <LogoComp id={gameInfo.homeTeamId} />
            <p>{gameInfo.homeTeam}</p>
          </div>
          <div className={classes.logo}>
            <LogoComp id={gameInfo.visitorTeamId} />
            <p>{gameInfo.visitorTeam}</p>
          </div>
        </div>
        <div className={classes.stats}>
          <TeamGameStatsList gameStats={gameStats} />
        </div>
      </div>
    </div>
  );
};

export default TeamGameStats;
