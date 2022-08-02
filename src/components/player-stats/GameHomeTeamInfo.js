import classes from "./GameTeamInfo.module.css";
import { teamsLogos } from "../teams/TeamsLogos";
import LogoComp from "../UI/LogoComp";

const GameHomeTeamInfo = (props) => {
  return (
    <div className={classes.team}>
      <div className={classes.logo}>
        <LogoComp
          id={teamsLogos.find((team) => team.name === props.homeTeam).id}
        />
        <p>{props.homeTeam}</p>
      </div>
      <h3>{props.score}</h3>
    </div>
  );
};

export default GameHomeTeamInfo;
