import { getPlayersGameStatsAPI } from "./BallDontLieAPIClient";

export const separatePlayersToTeams = (gameStats, teamFullName) =>
  gameStats.filter((player) => player.team.full_name === teamFullName);

const playersToTeamStats = (teamPlayersStats) => {
  const teamGameStats = teamPlayersStats.reduce((total, item) => {
    Object.keys(item).forEach((key) => {
      total[key] = (total[key] || 0) + item[key];
    });
    return total;
  }, {});
  [
    "game",
    "id",
    "min",
    "player",
    "team",
    "fg3_pct",
    "fg_pct",
    "ft_pct",
  ].forEach((key) => delete teamGameStats[key]);

  const numberToPercet = (stat) => (stat * 100).toFixed(0) + "%";
  teamGameStats.fg3_pct = numberToPercet(
    teamGameStats.fg3m / teamGameStats.fg3a
  );
  teamGameStats.fg_pct = numberToPercet(teamGameStats.fgm / teamGameStats.fga);
  teamGameStats.ft_pct = numberToPercet(teamGameStats.ftm / teamGameStats.fta);
  return teamGameStats;
};

const mergeTeamsStatsObjects = (homeTeamStats, visitorTeamStats) => {
  const homeTeamStatsArray = Object.entries(homeTeamStats);
  const visitorTeamStatsArray = Object.entries(visitorTeamStats);

  const allTeamsStats = homeTeamStatsArray.map(
    (statCategory, index) =>
      (statCategory = {
        category: statCategory[0].toUpperCase(),
        homeTeamValue: statCategory[1],
        visitorTeamValue: visitorTeamStatsArray[index][1],
      })
  );
  return allTeamsStats;
};

export const getFormattedTeamStatsData = async (
  homeTeamName,
  visitorTeamName,
  seasonYear,
  gameId
) => {
  const data = await getPlayersGameStatsAPI(seasonYear, gameId);
  const gameStats = data.data;
  const homeTeamGameStats = playersToTeamStats(
    separatePlayersToTeams(gameStats, homeTeamName)
  );
  const visitorTeamGameStats = playersToTeamStats(
    separatePlayersToTeams(gameStats, visitorTeamName)
  );
  const mergedTeamsStats = mergeTeamsStatsObjects(
    homeTeamGameStats,
    visitorTeamGameStats
  );

  return mergedTeamsStats;
};
