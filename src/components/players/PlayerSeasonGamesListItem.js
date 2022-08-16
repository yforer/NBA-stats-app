import { useDispatch } from "react-redux";
import { playerActions } from "../../store/player";
import { statsActions } from "../../store/stats";
import classes from "./PlayerSeasonGamesListItem.module.scss";

const PlayerSeasonGamesListItem = (props) => {
  const dispatch = useDispatch();

  const gameChosenHandler = () => {
    dispatch(
      playerActions.saveChosenGameData({
        id: props.id,
        date: props.date,
        homeTeam: props.homeTeam,
        visitorTeam: props.visitorTeam,
      })
    );
    dispatch(statsActions.singlePlayerGameStatsChosenHandler());
    dispatch(statsActions.showStatsHandler());
  };

  return (
    <li key={props.id}>
      <button onClick={gameChosenHandler}>
        <div className={classes.date}>{props.date}</div>
        <div
          className={classes.game}
        >{`${props.homeTeam} VS ${props.visitorTeam}`}</div>
      </button>
    </li>
  );
};

export default PlayerSeasonGamesListItem;
