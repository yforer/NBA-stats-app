import classes from "./TeamGameStatsList.module.scss";

const TeamGameStatsList = (props) => {
  const allTeamsStatsArray = props.gameStats;

  const content = allTeamsStatsArray.map((stat) => (
    <li key={stat.category} className={classes.item}>
      <p>{stat.category}</p>
      <div>{stat.homeTeamValue}</div>
      <div>{stat.visitorTeamValue}</div>
    </li>
  ));

  return <ul className={classes.list}>{content}</ul>;
};

export default TeamGameStatsList;
