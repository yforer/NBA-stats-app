import { Fragment, useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { getPlayersGameStatsAPI } from "../../services/BallDontLieAPICalls";
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

      const data = await getPlayersGameStatsAPI(seasonYear, gameId);

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
