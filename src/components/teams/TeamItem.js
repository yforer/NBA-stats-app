import { Link } from "react-router-dom";
import classes from "./TeamItem.module.css";
const svgDir = require.context("../../assets");

const TeamItem = (props) => {
  return (
    <div className={classes.team}>
      <div className={classes.teamImg}>
        <Link to={`/teams/${props.id}`} className={classes.btn}>
          <img src={svgDir(`./${props.id}.svg`)} alt={props.name}></img>
        </Link>
      </div>
    </div>
  );
};

export default TeamItem;
