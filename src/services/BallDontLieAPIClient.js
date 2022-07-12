export const getPlayersGameStatsAPI = async (seasonYear, gameId) => {
  const response = await fetch(
    `https://www.balldontlie.io/api/v1/stats?seasons[]=${seasonYear}&game_ids[]=${gameId}&per_page=100`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch players game stats");
  }

  const data = await response.json();

  return data;
};

export const getSeasonTeamGamesAPI = async (seasonYear, numId) => {
  const response = await fetch(
    `https://www.balldontlie.io/api/v1/games?seasons[]=${seasonYear}&team_ids[]=${numId}&per_page=100`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch team games");
  }

  const data = await response.json();

  if (data.meta.total_pages > 1) {
    const responsePage2 = await fetch(
      `https://www.balldontlie.io/api/v1/games?seasons[]=${seasonYear}&team_ids[]=${numId}&per_page=100&page=2`
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

  return sortedDataByDates;
};
