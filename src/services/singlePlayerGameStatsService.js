export const formatPlayerGameData = (playerGameStats) => {
  const sorttedAverages = [
    { category: "MIN", value: playerGameStats.min },
    { category: "PTS", value: playerGameStats.pts },
    { category: "AST", value: playerGameStats.ast },
    { category: "REB", value: playerGameStats.reb },
    { category: "FGA", value: playerGameStats.fga },
    { category: "FGM", value: playerGameStats.fgm },
    {
      category: "FG%",
      value: (playerGameStats.fg_pct * 100).toFixed(0) + "%",
    },
    { category: "STL", value: playerGameStats.stl },
    { category: "BLK", value: playerGameStats.blk },
    { category: "FG3A", value: playerGameStats.fg3a },
    { category: "FG3M", value: playerGameStats.fg3m },
    {
      category: "FG3%",
      value: (playerGameStats.fg3_pct * 100).toFixed(0) + "%",
    },
    { category: "FTA", value: playerGameStats.fta },
    { category: "FTM", value: playerGameStats.ftm },
    {
      category: "FT%",
      value: (playerGameStats.ft_pct * 100).toFixed(0) + "%",
    },
    { category: "DREB", value: playerGameStats.dreb },
    { category: "OREB", value: playerGameStats.oreb },
    { category: "TOV", value: playerGameStats.turnover },
  ];

  return sorttedAverages;
};
