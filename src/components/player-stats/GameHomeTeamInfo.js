import classes from "./GameTeamInfo.module.css";
import { teamsLogos } from "../teams/TeamsLogos";
const svgDir = require.context("../../assets");

const GameHomeTeamInfo = (props) => {
  return (
    <div className={classes.team}>
      <div className={classes.logo}>
        <img
          src={svgDir(
            `./${
              teamsLogos.find((team) => team.name === props.homeTeam).id
            }.svg`
          )}
          alt={props.homeTeam}
        ></img>
        <h3>{props.homeTeam}</h3>
      </div>
      <h2>{props.score}</h2>
    </div>
  );
};

export default GameHomeTeamInfo;
