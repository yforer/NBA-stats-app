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
    const gameId = props.id;
    dispatch(statsActions.showStatsHandler());
    dispatch(
      statsActions.gameChosenHandler({
        gameId: gameId,
        homeTeam: homeTeam.name,
        visitorTeam: visitorTeam.name,
        date: formattedDate,
      })
    );
    dispatch(statsActions.teamGameStatsChosenHandler());
  };

  const playersStatsHandler = (event) => {
    dispatch(statsActions.showStatsHandler());
    dispatch(
      statsActions.gameChosenHandler({
        gameId: props.id,
        homeTeam: homeTeam.name,
        visitorTeam: visitorTeam.name,
        date: formattedDate,
      })
    );
    dispatch(statsActions.playersGameStatsChosenHandler());
  };

  return (
    <li className={classes.list}>
      <div className={classes.game}>
        <div className={classes.date}>{formattedDate}</div>
        <div className={classes.data}>
          <TeamGameItem team={homeTeam} score={props.homeTeamScore} />
          <AwayTeamGameItem team={visitorTeam} score={props.visitorTeamScore} />
        </div>
      </div>
      <button onClick={teamsStatsHandler}>teams stats</button>
      <button onClick={playersStatsHandler}>players stats</button>
    </li>
  );
};

export default GameItem;
