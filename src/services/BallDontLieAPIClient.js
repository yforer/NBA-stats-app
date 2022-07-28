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

  return data;
};

export const getPlayersSearchResultsAPI = async (playerName) => {
  const response = await fetch(
    `https://www.balldontlie.io/api/v1/players?search=${playerName}&per_page=100`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch players search list");
  }

  const data = await response.json();

  if (data.meta.total_pages > 1) {
    const responsePage2 = await fetch(
      `https://www.balldontlie.io/api/v1/players?search=${playerName}&per_page=100&page=2`
    );

    if (!responsePage2.ok) {
      throw new Error("Failed to fetch players search list (page 2)");
    }

    const dataPage2 = await responsePage2.json();
    data.data.push(...dataPage2.data);
  }

  return data;
};

export const getPlayerProfileAPI = async (playerName) => {
  const response = await fetch(
    `https://www.balldontlie.io/api/v1/players?search=${playerName}&per_page=100`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch player profile");
  }

  const data = await response.json();

  return data.data[0];
};

export const getPlayerSeasonAveragesAPI = async (season, playerId) => {
  const response = await fetch(
    `https://www.balldontlie.io/api/v1/season_averages?season=${season}&player_ids[]=${playerId}`
  );

  if (!response.ok) {
    throw new Error("Failed to fatch player season averages");
  }

  const data = await response.json();

  return data.data[0];
};

export const getAllPlayerSeasonGamesStatsAPI = async (season, playerId) => {
  const response = await fetch(
    `https://www.balldontlie.io/api/v1/stats?seasons[]=${season}&player_ids[]=${playerId}&per_page=100`
  );

  if (!response.ok) {
    throw new Error("failed to fetch player season games stats");
  }

  const data = await response.json();

  if (data.meta.total_pages > 1) {
    const responsePage2 = await fetch(
      `https://www.balldontlie.io/api/v1/stats?seasons[]=${season}&player_ids[]=${playerId}&per_page=100&page=2`
    );

    if (!responsePage2.ok) {
      throw new Error("failed to fetch player season games stats (page 2)");
    }

    const dataPage2 = await responsePage2.json();
    data.data.push(...dataPage2.data);
  }

  return data.data;
};

export const getPlayerSeasonGamesStatsByDateAPI = async (
  season,
  playerId,
  startDate = `${season}-10-01`,
  endDate = `${season + 1}-07-01`
) => {
  const response = await fetch(
    `https://www.balldontlie.io/api/v1/stats?seasons[]=${season}&player_ids[]=${playerId}&start_date=${startDate}&end_date=${endDate}&per_page=100`
  );

  if (!response.ok) {
    throw new Error("failed to fetch player season games stats by dates");
  }

  const data = await response.json();

  return data;
};
