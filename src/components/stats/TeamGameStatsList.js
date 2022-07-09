import { Fragment } from "react";
import classes from "./TeamGameStats.module.css";

const TeamGameStatsList = (props) => {
  const homeTeam = Object.entries(props.homeTeamStats);
  const visitorTeam = Object.entries(props.visitorTeamStats);

  const allTeamsStats = homeTeam.map(
    (statCategory, index) =>
      (statCategory = {
        category: statCategory[0].toUpperCase(),
        homeTeamValue: statCategory[1],
        visitorTeamValue: visitorTeam[index][1],
      })
  );

  const content = allTeamsStats.map((stat) => (
    <li key={stat.category} className={classes.list}>
      <div>{stat.category}</div>
      <div>{stat.homeTeamValue}</div>
      <div>{stat.visitorTeamValue}</div>
    </li>
  ));

  return <Fragment>{content}</Fragment>;
};

export default TeamGameStatsList;
