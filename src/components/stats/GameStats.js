import { Fragment, useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import TeamGameStats from "./TeamGameStats";
import PlayersGameStats from "./PlayersGameStats";
import LoadingSpinner from "../UI/LoadingSpinner";

const GameStats = (props) => {
  const gameId = useSelector((state) => state.stats.gameInfo.gameId);
  const seasonYear = useSelector((state) => state.season.season);
  const [gameStats, setGameStats] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const teamGameStatsChosen = useSelector(
    (state) => state.stats.teamGameStatsChosen
  );
  const playersGameStatsChosen = useSelector(
    (state) => state.stats.playersGameStatsChosen
  );

  const getGameStats = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://www.balldontlie.io/api/v1/stats?seasons[]=${seasonYear}&game_ids[]=${gameId}&per_page=100`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch players game stats");
      }

      const data = await response.json();

      setGameStats(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getGameStats();
  }, [getGameStats]);

  return (
    <Fragment>
      {isLoading && <LoadingSpinner />}
      {!isLoading && teamGameStatsChosen && gameStats && (
        <TeamGameStats gameStats={gameStats} onClose={props.onClose} />
      )}
      {!isLoading && playersGameStatsChosen && gameStats && (
        <PlayersGameStats gameStats={gameStats} onClose={props.onClose} />
      )}
    </Fragment>
  );
};

export default GameStats;
