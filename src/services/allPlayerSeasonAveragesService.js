export const formatAveragesData = (playerAverages) => {
  const sorttedAverages = [
    { category: "Games Played", value: playerAverages.games_played },
    { category: "MIN", value: playerAverages.min },
    { category: "PTS", value: playerAverages.pts },
    { category: "AST", value: playerAverages.ast },
    { category: "REB", value: playerAverages.reb },
    { category: "FG-A", value: playerAverages.fga },
    { category: "FG-M", value: playerAverages.fgm },
    {
      category: "FG-PCT",
      value: (playerAverages.fg_pct * 100).toFixed(0) + "%",
    },
    { category: "STL", value: playerAverages.stl },
    { category: "BLK", value: playerAverages.blk },
    { category: "FG3-A", value: playerAverages.fg3a },
    { category: "FG3-M", value: playerAverages.fg3m },
    {
      category: "FG3-PCT",
      value: (playerAverages.fg3_pct * 100).toFixed(0) + "%",
    },
    { category: "FT-A", value: playerAverages.fta },
    { category: "FT-M", value: playerAverages.ftm },
    {
      category: "FT-PCT",
      value: (playerAverages.ft_pct * 100).toFixed(0) + "%",
    },
    { category: "DREB", value: playerAverages.dreb },
    { category: "OREB", value: playerAverages.oreb },
    { category: "TURNOVER", value: playerAverages.turnover },
  ];

  return sorttedAverages;
};
