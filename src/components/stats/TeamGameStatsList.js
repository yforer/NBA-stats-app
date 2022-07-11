import { Fragment } from "react";
import { mergeTeamsStatsObjects } from "../../services/teamGameStatsService";
import classes from "./TeamGameStats.module.css";

const TeamGameStatsList = (props) => {
  const allTeamsStatsArray = props.gameStats;

  const content = allTeamsStatsArray.map((stat) => (
    <li key={stat.category} className={classes.list}>
      <div>{stat.category}</div>
      <div>{stat.homeTeamValue}</div>
      <div>{stat.visitorTeamValue}</div>
    </li>
  ));

  return <Fragment>{content}</Fragment>;
};

export default TeamGameStatsList;
