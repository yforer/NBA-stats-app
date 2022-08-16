import { Fragment } from "react";
import classes from "./TeamGameItem.module.scss";
import LogoComp from "../UI/LogoComp";

const TeamGameItem = (props) => {
  const content = props.isHomeTeam ? (
    <Fragment>
      <div className={classes.logo}>
        <LogoComp id={props.team.id} />
        <p>{props.team.name}</p>
      </div>
      <h3>{props.score}</h3>
    </Fragment>
  ) : (
    <Fragment>
      <h3>{props.score}</h3>
      <div className={classes.logo}>
        <LogoComp id={props.team.id} />
        <p>{props.team.name}</p>
      </div>
    </Fragment>
  );

  return <div className={classes.team}>{content}</div>;
};

export default TeamGameItem;
