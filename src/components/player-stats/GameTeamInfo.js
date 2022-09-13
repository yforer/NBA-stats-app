import classes from "./GameTeamInfo.module.scss";
import { teamsLogos } from "../teams/TeamsLogos";
import LogoComp from "../UI/LogoComp";
import { Fragment } from "react";

const GameTeamInfo = (props) => {
  const content = props.isHomeTeam ? (
    <Fragment>
      <div className={classes.logo}>
        <LogoComp id={teamsLogos.find((team) => team.name === props.team).id} />
        <p>{props.team}</p>
      </div>
      <h3>{props.score}</h3>
    </Fragment>
  ) : (
    <Fragment>
      <h3>{props.score}</h3>
      <div className={classes.logo}>
        <LogoComp id={teamsLogos.find((team) => team.name === props.team).id} />
        <p>{props.team}</p>
      </div>
    </Fragment>
  );

  return <div className={classes.team}>{content}</div>;
};

export default GameTeamInfo;
