import classes from "./TeamsLanding.module.scss";
import { teamsLogos } from "../components/teams/TeamsLogos";
import TeamItem from "../components/teams/TeamItem";

const TeamsLanding = () => {
  const teamsList = teamsLogos.map((team) => (
    <TeamItem logo={team.logo} name={team.name} id={team.id} key={team.id} />
  ));

  return (
    <div className={classes.container}>
      <h2>Teams</h2>
      <div className={classes.teams}>{teamsList}</div>
    </div>
  );
};

export default TeamsLanding;
