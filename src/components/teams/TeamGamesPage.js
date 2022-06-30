import { Fragment, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GamesList from "../games/GamesList";
import LoadingSpinner from "../UI/LoadingSpinner";
import { teamsLogos } from "./TeamsLogos";
import classes from "./TeamGamesPage.module.css";
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
      const response = await fetch(
        `https://www.balldontlie.io/api/v1/games?seasons[]=${seasonYear}&team_ids[]=${team.numId}&per_page=100`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch team games");
      }

      const data = await response.json();

      if (data.meta.total_pages > 1) {
        const responsePage2 = await fetch(
          `https://www.balldontlie.io/api/v1/games?seasons[]=${seasonYear}&team_ids[]=${team.numId}&per_page=100&page=2`
        );

        if (!responsePage2.ok) {
          throw new Error("Failed to fetch team games (page 2)");
        }

        const dataPage2 = await responsePage2.json();

        data.data.push(...dataPage2.data);
      }

      const sortedDataByDates = data.data.slice().sort((game1, game2) => {
        return game2.date > game1.date ? -1 : game2.date < game1.date ? 1 : 0;
      });

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
          <ul>
            <GamesList games={games} />
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default TeamGamesPage;
