export const formatAndSortPlayersStats = (playersStats) => {
  const formattedPlayersStats = playersStats.map(
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
        fg3_pct: (player.fg3_pct * 100).toFixed(0) + "%",
        fga: player.fga,
        fgm: player.fgm,
        fg_pct: (player.fg_pct * 100).toFixed(0) + "%",
        fta: player.fta,
        ftm: player.ftm,
        ft_pt: (player.ft_pct * 100).toFixed(0) + "%",
        pf: player.pf,
        turnover: player.turnover,
      })
  );
  const sortedPlayersStats = formattedPlayersStats
    .slice()
    .sort((playerA, playerB) => {
      return playerB.pts > playerA.pts ? 1 : playerA.pts > playerB.pts ? -1 : 0;
    });

  return sortedPlayersStats;
};

export const createPlayerNamesArray = (playersStats) => {
  const namesArr = playersStats.map((player) => player.name);
  const add = namesArr.unshift("NAME");
  return namesArr;
};

export const createCategeriesArray = (playersStats) => {
  const categoriesArr = Object.keys(playersStats[0]);
  const cutNameCategory = categoriesArr.shift();
  return categoriesArr;
};
