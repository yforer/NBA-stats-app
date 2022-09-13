import { Fragment, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSeasonTeamGames } from "../../services/teamGamesPageService";
import GamesList from "../games/GamesList";
import LoadingSpinner from "../UI/LoadingSpinner";
import { teamsLogos } from "./TeamsLogos";
import classes from "./TeamGamesPage.module.scss";
import { useSelector } from "react-redux";
import TeamSeasonStats from "./TeamSeasonStats";

const TeamGamesPage = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const seasonYear = useSelector((state) => state.season.season);
  const params = useParams();
  const [team] = teamsLogos.filter((team) => team.id === params.teamId);

  const getTeamGames = useCallback(async () => {
    try {
      setIsLoading(true);

      const sortedDataByDates = await getSeasonTeamGames(
        seasonYear,
        team.numId
      );

      setGames(sortedDataByDates);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getTeamGames();
  }, [getTeamGames]);

  return (
    <Fragment>
      {isLoading && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && games.length > 0 && (
        <div className={classes.games}>
          <TeamSeasonStats sortedGames={games} />
          <GamesList games={games} />
        </div>
      )}
    </Fragment>
  );
};

export default TeamGamesPage;
