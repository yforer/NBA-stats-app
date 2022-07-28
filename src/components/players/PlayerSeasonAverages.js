import classes from "./PlayerSeasonAverages.module.css";
import { formatAveragesSectionContent } from "../../services/playersProfileService";
import { useDispatch } from "react-redux";
import { statsActions } from "../../store/stats";

const PlayerSeasonAverages = (props) => {
  const dispatch = useDispatch();
  const averagesSummary = formatAveragesSectionContent(props.playerAverages);

  const showAllPlayerSeasonHandler = () => {
    dispatch(statsActions.showStatsHandler());
    dispatch(statsActions.playerAveragesStatsChosenHandler());
  };

  const content = averagesSummary.map((stat) => (
    <li key={stat.category}>
      <div>{stat.category}</div>
      <div>{stat.value}</div>
    </li>
  ));

  return (
    <div className={classes.averages}>
      <h3>Season Averages</h3>
      <ul>{content}</ul>
      <button onClick={showAllPlayerSeasonHandler}>Show all averages</button>
    </div>
  );
};

export default PlayerSeasonAverages;
