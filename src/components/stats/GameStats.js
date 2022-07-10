import { Fragment, useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { getFormattedTeamStatsData } from "../../services/teamGameStatsService";
import { getFormattedPlayersStats } from "../../services/playersGameStatsService";
import TeamGameStats from "./TeamGameStats";
import PlayersGameStats from "./PlayersGameStats";
import LoadingSpinner from "../UI/LoadingSpinner";

const GameStats = (props) => {
  const gameId = useSelector((state) => state.stats.gameInfo.gameId);
  const seasonYear = useSelector((state) => state.season.season);
  const gameInfo = useSelector((state) => state.stats.gameInfo);
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

      if (teamGameStatsChosen && !playersGameStatsChosen) {
        const data = await getFormattedTeamStatsData(
          gameInfo.homeTeam,
          gameInfo.visitorTeam,
          seasonYear,
          gameId
        );
        setGameStats(data);
      }

      if (!teamGameStatsChosen && playersGameStatsChosen) {
        const data = await getFormattedPlayersStats(
          gameInfo.homeTeam,
          gameInfo.visitorTeam,
          seasonYear,
          gameId
        );
        setGameStats(data);
      }
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
