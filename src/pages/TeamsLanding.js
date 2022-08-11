import classes from "./TeamsLanding.module.css";
import { teamsLogos } from "../components/teams/TeamsLogos";
import TeamItem from "../components/teams/TeamItem";

const TeamsLanding = () => {
  const teamsList = teamsLogos.map((team) => (
    <TeamItem logo={team.logo} name={team.name} id={team.id} key={team.id} />
  ));

  return (
    <div className={classes.container}>
      <h1>Teams</h1>
      <div className={classes.teams}>{teamsList}</div>
    </div>
  );
};

export default TeamsLanding;
