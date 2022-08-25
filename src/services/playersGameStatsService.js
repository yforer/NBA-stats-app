import { getPlayersGameStatsAPI } from "./BallDontLieAPIClient";
import { separatePlayersToTeams } from "./teamGameStatsService";

const formatAndSortPlayersStats = (playersStats) => {
  const omittedPlayersNotPlayed = playersStats.filter(
    (player) => player.min !== null
  );

  const formattedPlayersStats = omittedPlayersNotPlayed.map(
    (player) =>
      (player = {
        name: `${player.player.first_name} ${player.player.last_name}`,
        min: player.min,
        pts: player.pts,
        ast: player.ast,
        reb: player.reb,
        blk: player.blk,
        stl: player.stl,
        dreb: player.dreb,
        oreb: player.oreb,
        fg3a: player.fg3a,
        fg3m: player.fg3m,
        "fg3%": (player.fg3_pct * 100).toFixed(0) + "%",
        fga: player.fga,
        fgm: player.fgm,
        "fg%": (player.fg_pct * 100).toFixed(0) + "%",
        fta: player.fta,
        ftm: player.ftm,
        "ft%": (player.ft_pct * 100).toFixed(0) + "%",
        pf: player.pf,
        tov: player.turnover,
      })
  );
  const sortedPlayersStats = formattedPlayersStats
    .slice()
    .sort((playerA, playerB) => {
      return playerB.pts > playerA.pts ? 1 : playerA.pts > playerB.pts ? -1 : 0;
    });

  return sortedPlayersStats;
};

const createPlayerNamesArray = (playersStats) => {
  const namesArr = playersStats.map((player) => player.name);
  namesArr.unshift("NAME");
  return namesArr;
};

const createCategeriesArray = (playersStats) => {
  const categoriesArr = Object.keys(playersStats[0]);
  categoriesArr.shift();
  return categoriesArr;
};

export const getFormattedPlayersStats = async (
  homeTeamName,
  visitorTeamName,
  seasonYear,
  gameId
) => {
  const data = await getPlayersGameStatsAPI(seasonYear, gameId);
  const gameStats = data.data;
  const homeTeamPlayersStats = formatAndSortPlayersStats(
    separatePlayersToTeams(gameStats, homeTeamName)
  );
  const homeTeamPlayersArray = createPlayerNamesArray(homeTeamPlayersStats);
  const visitorTeamPlayersStats = formatAndSortPlayersStats(
    separatePlayersToTeams(gameStats, visitorTeamName)
  );
  const visitorTeamPlayersArray = createPlayerNamesArray(
    visitorTeamPlayersStats
  );
  const categoriesArray = createCategeriesArray(homeTeamPlayersStats);

  return {
    homeTeamPlayersStats: homeTeamPlayersStats,
    visitorTeamPlayersStats: visitorTeamPlayersStats,
    homeTeamPlayersArray: homeTeamPlayersArray,
    visitorTeamPlayersArray: visitorTeamPlayersArray,
    categoriesArray: categoriesArray,
  };
};
