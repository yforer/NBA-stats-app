import { useSelector } from "react-redux";
import { formatAveragesData } from "../../services/allPlayerSeasonAveragesService";
import CloseButton from "../UI/CloseButton";
import LogoComp from "../UI/LogoComp";
import classes from "./AllPlayerSeasonAverages.module.scss";

const AllPlayerSeasonAverages = (props) => {
  const AllSeasonAverages = useSelector((state) => state.player.playerAverages);
  const playerData = useSelector((state) => state.player.playerData);
  const seasonYear = useSelector((state) => state.season.season);

  const formattedAverages = formatAveragesData(AllSeasonAverages);

  const averagesContent = formattedAverages.map((stat) => (
    <li key={stat.category}>
      <p>{stat.category}</p>
      <p>{stat.value}</p>
    </li>
  ));

  return (
    <div className={classes.container}>
      <CloseButton onClose={props.onClose} />
      <div className={classes.headline}>
        <div className={classes.headers}>
          <h3>{`${playerData.playerName}`}</h3>
          <p>{`${seasonYear}-${+seasonYear + 1} Averages`}</p>
        </div>
        <LogoComp id={playerData.team} />
      </div>
      <ul>{averagesContent}</ul>
    </div>
  );
};

export default AllPlayerSeasonAverages;
