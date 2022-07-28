import { useSelector } from "react-redux";
import { formatAveragesData } from "../../services/allPlayerSeasonAveragesService";
import classes from "./AllPlayerSeasonAverages.module.css";
const svgDir = require.context("../../assets");

const AllPlayerSeasonAverages = (props) => {
  const AllSeasonAverages = useSelector((state) => state.player.playerAverages);
  const playerData = useSelector((state) => state.player.playerData);
  const seasonYear = useSelector((state) => state.season.season);

  const formattedAverages = formatAveragesData(AllSeasonAverages);

  const averagesContent = formattedAverages.map((stat) => (
    <li key={stat.category}>
      <div>{stat.category}</div>
      <div>{stat.value}</div>
    </li>
  ));

  return (
    <div className={classes.container}>
      <div className={classes.headline}>
        <button onClick={props.onClose}>X</button>
        <h2>{`${playerData.playerName} ${seasonYear} Averages`}</h2>
        <img
          src={svgDir(`./${playerData.team}.svg`)}
          alt={playerData.team}
        ></img>
      </div>
      <ul>{averagesContent}</ul>
    </div>
  );
};

export default AllPlayerSeasonAverages;
