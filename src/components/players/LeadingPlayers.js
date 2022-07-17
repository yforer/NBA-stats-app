import { leadingPlayersData } from "./leading-players-data";
import { useSelector } from "react-redux";
import classes from "./LeadingPlayers.module.css";

const LeadingPlayers = () => {
  const seasonYear = useSelector((state) => state.season.season);
  const yearKey = `season${seasonYear}`;

  const pointsLeadersContent = leadingPlayersData[yearKey].points.map(
    (player) => (
      <li key={player.name}>
        <div>{player.name}</div>
        <div>{player.value}</div>
      </li>
    )
  );

  const reboundsLeadersContent = leadingPlayersData[yearKey].rebounds.map(
    (player) => (
      <li key={player.name}>
        <div>{player.name}</div>
        <div>{player.value}</div>
      </li>
    )
  );

  const assistsLeadersContent = leadingPlayersData[yearKey].assists.map(
    (player) => (
      <li key={player.name}>
        <div>{player.name}</div>
        <div>{player.value}</div>
      </li>
    )
  );

  return (
    <div className={classes.categories}>
      <div className={classes.leaders}>
        <h3>Point Leaders</h3>
        <ul>{pointsLeadersContent}</ul>
      </div>
      <div className={classes.leaders}>
        <h3>Rebound Leaders</h3>
        <ul>{reboundsLeadersContent}</ul>
      </div>
      <div className={classes.leaders}>
        <h3>Assist Leaders</h3>
        <ul>{assistsLeadersContent}</ul>
      </div>
    </div>
  );
};

export default LeadingPlayers;
