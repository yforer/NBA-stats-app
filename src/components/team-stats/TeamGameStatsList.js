import classes from "./TeamGameStats.module.css";

const TeamGameStatsList = (props) => {
  const allTeamsStatsArray = props.gameStats;

  const content = allTeamsStatsArray.map((stat) => (
    <li key={stat.category} className={classes.list}>
      <p>{stat.category}</p>
      <div>{stat.homeTeamValue}</div>
      <div>{stat.visitorTeamValue}</div>
    </li>
  ));

  return <ul>{content}</ul>;
};

export default TeamGameStatsList;
