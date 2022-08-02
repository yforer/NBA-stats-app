import classes from "./GameTeamInfo.module.css";
import { teamsLogos } from "../teams/TeamsLogos";
import LogoComp from "../UI/LogoComp";

const GameVisitorTeamInfo = (props) => {
  return (
    <div className={classes.team}>
      <h3>{props.score}</h3>
      <div className={classes.logo}>
        <LogoComp
          id={teamsLogos.find((team) => team.name === props.visitorTeam).id}
        />
        <p>{props.visitorTeam}</p>
      </div>
    </div>
  );
};

export default GameVisitorTeamInfo;
