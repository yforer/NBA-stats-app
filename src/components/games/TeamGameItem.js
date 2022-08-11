import { Fragment } from "react";
import classes from "./TeamGameItem.module.css";
import LogoComp from "../UI/LogoComp";

const TeamGameItem = (props) => {
  const content = props.isHomeTeam ? (
    <Fragment>
      <div className={classes.logo}>
        <LogoComp id={props.team.id} />
        <p>{props.team.name}</p>
      </div>
      <h2>{props.score}</h2>
    </Fragment>
  ) : (
    <Fragment>
      <h2>{props.score}</h2>
      <div className={classes.logo}>
        <LogoComp id={props.team.id} />
        <p>{props.team.name}</p>
      </div>
    </Fragment>
  );

  return <div className={classes.team}>{content}</div>;
};

export default TeamGameItem;
