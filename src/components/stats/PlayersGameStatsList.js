import { Fragment } from "react";
import stats from "../../store/stats";
import classes from "./PlayersGameStatsList.module.css";

const PlayersGameStatsList = (props) => {
  const teamStats = props.chosenTeam.slice().sort((playerA, playerB) => {
    return playerB.pts > playerA.pts ? 1 : playerA.pts > +playerB.pts ? -1 : 0;
  });

  console.log(teamStats);
  const playersNames = teamStats.map((player) => player.name);
  console.log(playersNames);
  const formattedstats = teamStats.map((player, index) => {
    delete player.name;
    player = Object.entries(player);
    const name = player.unshift(["name", playersNames[index]]);
    return player;
  });

  const categoriesArray = formattedstats[1].map(
    (category) => (category = category[0])
  );

  const playersNamesContent = playersNames.map((player) => <div>{player}</div>);
  const statsContent = formattedstats.map((player) => {
    for (let i = 0; i < formattedstats[0].length; i++) {
      player[i] = <div>{player[i][1]}</div>;
    }
    player = <li>{player}</li>;
    return player;
  });

  const categoriesContent = categoriesArray.map((category) => {
    category = category.toUpperCase();
    category = <div>{category}</div>;
    return category;
  });

  return (
    <Fragment>
      <div className={classes.category}>{categoriesContent}</div>
      <div className={classes.values}>
        <ul>{statsContent}</ul>
      </div>
    </Fragment>
  );
};

export default PlayersGameStatsList;

//
//
