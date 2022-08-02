import { useSelector } from "react-redux";
import { formatAveragesData } from "../../services/allPlayerSeasonAveragesService";
import CloseButton from "../UI/CloseButton";
import LogoComp from "../UI/LogoComp";
import classes from "./AllPlayerSeasonAverages.module.css";

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
      <CloseButton onClose={props.onClose} />
      <div className={classes.headline}>
        <div className={classes.headers}>
          <h2>{`${playerData.playerName}`}</h2>
          <h3>{`${seasonYear}-${+seasonYear + 1} Averages`}</h3>
        </div>
        <LogoComp id={playerData.team} />
      </div>
      <ul>{averagesContent}</ul>
    </div>
  );
};

export default AllPlayerSeasonAverages;
