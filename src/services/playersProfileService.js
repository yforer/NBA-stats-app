import {
  getPlayerProfileAPI,
  getAllPlayerSeasonGamesStatsAPI,
  getPlayerSeasonAveragesAPI,
} from "./BallDontLieAPIClient";

export const getPlayerProfileData = async (playerName, seasonYear) => {
  const playerGeneralData = await getPlayerProfileAPI(playerName);
  const playerId = playerGeneralData.id;
  const playerSeasonAverages = await getPlayerSeasonAveragesAPI(
    seasonYear,
    playerId
  );

  const playerSeasonGamesStats = await getAllPlayerSeasonGamesStatsAPI(
    seasonYear,
    playerId
  );

  return {
    playerGeneralData: playerGeneralData,
    playerSeasonAverages: playerSeasonAverages,
    playerSeasonGamesStats: playerSeasonGamesStats,
  };
};

export const formatAveragesSectionContent = (playerAverages) => {
  const formattedPlayerAverages = [
    {
      category: "Points",
      value: playerAverages.pts,
    },
    {
      category: "Assists",
      value: playerAverages.ast,
    },
    {
      category: "Rebounds",
      value: playerAverages.reb,
    },
  ];

  return formattedPlayerAverages;
};
