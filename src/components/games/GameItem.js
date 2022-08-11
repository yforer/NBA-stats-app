import { teamsLogos } from "../teams/TeamsLogos";
import classes from "./GameItem.module.css";
import TeamGameItem from "./TeamGameItem";
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

  const playersStatsHandler = () => {
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
        <p className={classes.date}>{formattedDate}</p>
        <div className={classes.data}>
          <TeamGameItem
            isHomeTeam={true}
            team={homeTeam}
            score={props.homeTeamScore}
          />
          <TeamGameItem
            isHomeTeam={false}
            team={visitorTeam}
            score={props.visitorTeamScore}
          />
        </div>
        <div className={classes.options}>
          <button onClick={teamsStatsHandler}>teams stats</button>
          <button onClick={playersStatsHandler}>players stats</button>
        </div>
      </div>
    </li>
  );
};

export default GameItem;
