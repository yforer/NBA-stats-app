import classes from "./TeamSeasonStats.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { teamsLogos } from "./TeamsLogos";
import LogoComp from "../UI/LogoComp";

const TeamSeasonStats = (props) => {
  const navigate = useNavigate();
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

  const backToAllTeamsHndler = () => {
    navigate("/teams");
  };

  return (
    <div className={classes.stats}>
      <div className={classes.info}>
        <LogoComp id={team.id} />
        <div className={classes.headline}>
          <button
            onClick={backToAllTeamsHndler}
          >{`< Back to all teams`}</button>
          <h1>{`${team.name}`}</h1>
        </div>
      </div>
      <div className={classes.record}>
        <LogoComp id="landing-drow" />
        <p>Regular Season Record:</p>
        <h2>{`${regularSeasonWins}W - ${
          regularSeasonGames.length - regularSeasonWins
        }L`}</h2>
      </div>
    </div>
  );
};

export default TeamSeasonStats;
