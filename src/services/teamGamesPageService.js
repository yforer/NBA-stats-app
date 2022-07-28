import { getSeasonTeamGamesAPI } from "./BallDontLieAPIClient";

export const getSeasonTeamGames = async (seasonYear, teamNumId) => {
  const data = await getSeasonTeamGamesAPI(seasonYear, teamNumId);

  const sortedDataByDates = data.data.slice().sort((game1, game2) => {
    return game2.date > game1.date ? -1 : game2.date < game1.date ? 1 : 0;
  });

  return sortedDataByDates;
};
