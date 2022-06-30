import classes from "./TeamGameItem.module.css";
const svgDir = require.context("../../assets");

const AwayTeamGameItem = (props) => {
  return (
    <div className={classes.team}>
      <h2>{props.score}</h2>
      <div className={classes.logo}>
        <p>{props.team.name}</p>
        <img src={svgDir(`./${props.team.id}.svg`)} alt={props.team.name}></img>
      </div>
    </div>
  );
};

export default AwayTeamGameItem;
