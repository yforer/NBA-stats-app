import { Link } from "react-router-dom";
import LogoComp from "../UI/LogoComp";
import classes from "./TeamItem.module.css";

const TeamItem = (props) => {
  return (
    <div className={classes.team}>
      <div className={classes.teamImg}>
        <Link to={`/teams/${props.id}`} className={classes.btn}>
          <LogoComp id={props.id} />
          <h3>{props.name}</h3>
        </Link>
      </div>
    </div>
  );
};

export default TeamItem;
