import classes from "./TeamsLanding.module.css";
import TeamsList from "../components/teams/TeamsList";

const TeamsLanding = () => {
  return (
    <div className={classes.teams}>
      <TeamsList />
    </div>
  );
};

export default TeamsLanding;
