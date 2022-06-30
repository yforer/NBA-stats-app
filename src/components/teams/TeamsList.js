import TeamItem from "./TeamItem";
import { teamsLogos } from "./TeamsLogos";

const TeamsList = () => {
  return teamsLogos.map((team) => (
    <TeamItem logo={team.logo} name={team.name} id={team.id} key={team.id} />
  ));
};

export default TeamsList;
