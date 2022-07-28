export const formatPlayerGameData = (playerGameStats) => {
  const sorttedAverages = [
    { category: "MIN", value: playerGameStats.min },
    { category: "PTS", value: playerGameStats.pts },
    { category: "AST", value: playerGameStats.ast },
    { category: "REB", value: playerGameStats.reb },
    { category: "FG-A", value: playerGameStats.fga },
    { category: "FG-M", value: playerGameStats.fgm },
    {
      category: "FG-PCT",
      value: (playerGameStats.fg_pct * 100).toFixed(0) + "%",
    },
    { category: "STL", value: playerGameStats.stl },
    { category: "BLK", value: playerGameStats.blk },
    { category: "FG3-A", value: playerGameStats.fg3a },
    { category: "FG3-M", value: playerGameStats.fg3m },
    {
      category: "FG3-PCT",
      value: (playerGameStats.fg3_pct * 100).toFixed(0) + "%",
    },
    { category: "FT-A", value: playerGameStats.fta },
    { category: "FT-M", value: playerGameStats.ftm },
    {
      category: "FT-PCT",
      value: (playerGameStats.ft_pct * 100).toFixed(0) + "%",
    },
    { category: "DREB", value: playerGameStats.dreb },
    { category: "OREB", value: playerGameStats.oreb },
    { category: "TURNOVER", value: playerGameStats.turnover },
  ];

  return sorttedAverages;
};
