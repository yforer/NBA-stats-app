import { teamsLogos } from "../teams/TeamsLogos";
import classes from "./GameItem.module.css";
import TeamGameItem from "./TeamGameItem";
import AwayTeamGameItem from "./AwayTeamGameItem";
import { useDispatch } from "react-redux";
import { statsActions } from "../../store/stats";

const GameItem = (props) => {
  const dispatch = useDispatch();
  const homeTeam = teamsLogos.find((team) => team.numId === props.homeTeamId);
  const visitorTeam = teamsLogos.find(
    (team) => team.numId === props.visitorTeamId
  );

  const isoDate = props.date;
  const date = new Date(isoDate);

  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    month: "long",
    day: "2-digit",
  }).format(date);

  const teamsStatsHandler = () => {
    dispatch(statsActions.showStatsHandler());
  };
  const playersStatsHandler = () => {};

  return (
    <li className={classes.list}>
      <div className={classes.date}>
        <h2>{formattedDate}</h2>
      </div>
      <div className={classes.game}>
        <TeamGameItem team={homeTeam} score={props.homeTeamScore} />
        <AwayTeamGameItem team={visitorTeam} score={props.visitorTeamScore} />
      </div>
      <button onClick={teamsStatsHandler}>teams stats</button>
      <button onClick={playersStatsHandler}>players stats</button>
    </li>
  );
};

export default GameItem;
