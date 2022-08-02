import classes from "./TeamGameItem.module.css";
const svgDir = require.context("../../assets");

const AwayTeamGameItem = (props) => {
  return (
    <div className={classes.team}>
      <h2>{props.score}</h2>
      <div className={classes.logo}>
        <img src={svgDir(`./${props.team.id}.png`)} alt={props.team.name}></img>
        <p>{props.team.name}</p>
      </div>
    </div>
  );
};

export default AwayTeamGameItem;
