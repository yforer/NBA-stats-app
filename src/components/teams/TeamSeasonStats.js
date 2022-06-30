import classes from "./TeamSeasonStats.module.css";
import { useParams } from "react-router-dom";
import { teamsLogos } from "./TeamsLogos";

const TeamSeasonStats = (props) => {
  const params = useParams();
  const [team] = teamsLogos.filter((team) => team.id === params.teamId);

  const regularSeasonGames = props.sortedGames.filter(
    (game) => game.postseason === false
  );

  const postSeasonGames = props.sortedGames.filter(
    (game) => game.postseason === true
  );

  const regularSeasonWins = regularSeasonGames.filter(
    (game) =>
      (game.home_team.abbreviation === params.teamId.toUpperCase() &&
        game.home_team_score > game.visitor_team_score) ||
      (game.visitor_team.abbreviation === params.teamId.toUpperCase() &&
        game.home_team_score < game.visitor_team_score)
  ).length;

  return (
    <div className={classes.stats}>
      <h1 className="centered">{`${team.name} season games`}</h1>
      <div
        className={classes.record}
      >{`regular season record:   ${regularSeasonWins}W - ${
        regularSeasonGames.length - regularSeasonWins
      }L`}</div>
    </div>
  );
};

export default TeamSeasonStats;
