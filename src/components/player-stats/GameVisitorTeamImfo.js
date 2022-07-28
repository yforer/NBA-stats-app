import classes from "./GameTeamInfo.module.css";
import { teamsLogos } from "../teams/TeamsLogos";
const svgDir = require.context("../../assets");

const GameVisitorTeamInfo = (props) => {
  return (
    <div className={classes.team}>
      <h2>{props.score}</h2>
      <div className={classes.logo}>
        <img
          src={svgDir(
            `./${
              teamsLogos.find((team) => team.name === props.visitorTeam).id
            }.svg`
          )}
          alt={props.visitorTeam}
        ></img>
        <h3>{props.visitorTeam}</h3>
      </div>
    </div>
  );
};

export default GameVisitorTeamInfo;
