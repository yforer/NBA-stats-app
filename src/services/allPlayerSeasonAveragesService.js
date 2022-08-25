export const formatAveragesData = (playerAverages) => {
  const sorttedAverages = [
    { category: "Games Played", value: playerAverages.games_played },
    { category: "MIN", value: playerAverages.min },
    { category: "PTS", value: playerAverages.pts },
    { category: "AST", value: playerAverages.ast },
    { category: "REB", value: playerAverages.reb },
    { category: "FGA", value: playerAverages.fga },
    { category: "FGM", value: playerAverages.fgm },
    {
      category: "FG%",
      value: (playerAverages.fg_pct * 100).toFixed(0) + "%",
    },
    { category: "STL", value: playerAverages.stl },
    { category: "BLK", value: playerAverages.blk },
    { category: "FG3A", value: playerAverages.fg3a },
    { category: "FG3M", value: playerAverages.fg3m },
    {
      category: "FG3%",
      value: (playerAverages.fg3_pct * 100).toFixed(0) + "%",
    },
    { category: "FTA", value: playerAverages.fta },
    { category: "FTM", value: playerAverages.ftm },
    {
      category: "FT%",
      value: (playerAverages.ft_pct * 100).toFixed(0) + "%",
    },
    { category: "DREB", value: playerAverages.dreb },
    { category: "OREB", value: playerAverages.oreb },
    { category: "TOV", value: playerAverages.turnover },
  ];

  return sorttedAverages;
};
