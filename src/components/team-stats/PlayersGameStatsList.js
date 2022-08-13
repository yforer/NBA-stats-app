import classes from "./PlayersGameStatsList.module.css";

const PlayersGameStatsList = (props) => {
  const formattedPlayersStats = props.gameStats.map((player) => {
    delete player.name;
    return player;
  });
  const playerNames = props.playerNames;
  const categories = props.categories;

  const createContent = (playersStats, categoriesArray) => {
    const dataContent = playersStats.map((player, index) => (
      <li key={index}>
        {Object.keys(player).map((key) => (
          <p key={key}>{player[key]}</p>
        ))}
      </li>
    ));

    const categoriesContent = (
      <li key={30}>
        {categoriesArray.map((category) => (
          <div key={category}>{category.toUpperCase()}</div>
        ))}
      </li>
    );

    dataContent.unshift(categoriesContent);
    return dataContent;
  };

  const statsContent = createContent(formattedPlayersStats, categories);

  const playerNamesContent = playerNames.map((player) => (
    <div key={player}>{player}</div>
  ));

  return (
    <div className={classes.stats}>
      <div className={classes.player}>{playerNamesContent}</div>
      <div className={classes.values}>
        <ul>{statsContent}</ul>
      </div>
    </div>
  );
};

export default PlayersGameStatsList;
