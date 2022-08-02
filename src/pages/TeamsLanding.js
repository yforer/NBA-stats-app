import classes from "./TeamsLanding.module.css";
import TeamsList from "../components/teams/TeamsList";

const TeamsLanding = () => {
  return (
    <div className={classes.container}>
      <h1>Teams</h1>
      <div className={classes.teams}>
        <TeamsList />
      </div>
    </div>
  );
};

export default TeamsLanding;
