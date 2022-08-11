import { leadingPlayersData } from "./leading-players-data";
import { useSelector } from "react-redux";
import classes from "./LeadingPlayers.module.css";
import { BsArrowDownShort, BsArrowRightShort } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";

const LeadingPlayers = () => {
  const seasonYear = useSelector((state) => state.season.season);
  const yearKey = `season${seasonYear}`;

  const createContent = (leadersArray) => {
    return leadersArray.map((player) => (
      <li key={player.name}>
        <div>{player.name}</div>
        <div>{player.value}</div>
      </li>
    ));
  };

  const pointsLeadersContent = createContent(
    leadingPlayersData[yearKey].points
  );
  const reboundsLeadersContent = createContent(
    leadingPlayersData[yearKey].rebounds
  );
  const assistsLeadersContent = createContent(
    leadingPlayersData[yearKey].assists
  );

  return (
    <div className={classes.container}>
      <h2>Season Averages Leaders</h2>
      <div className={classes.categories}>
        <div className={classes.leaders}>
          <div className={classes.headline}>
            <BsArrowRightShort color="orange" size={28} />
            <GoPrimitiveDot color="orange" size={28} />
            <h3>Points</h3>
          </div>
          <ul>{pointsLeadersContent}</ul>
        </div>
        <div className={classes.leaders}>
          <div className={classes.headline}>
            <BsArrowDownShort color="orange" size={28} />
            <GoPrimitiveDot color="orange" size={28} />
            <h3>Rebounds</h3>
          </div>
          <ul>{reboundsLeadersContent}</ul>
        </div>
        <div className={classes.leaders}>
          <div className={classes.headline}>
            <GoPrimitiveDot color="orange" size={28} />
            <BsArrowRightShort color="orange" size={28} />
            <h3>Assists</h3>
          </div>
          <ul>{assistsLeadersContent}</ul>
        </div>
      </div>
    </div>
  );
};

export default LeadingPlayers;
