import classes from "./PlayerStatsOptions";

const PlayerStatsOptions = (props) => {
  return (
    <div className={classes.options}>
      <button>Season Averages</button>
      <button>Stats By Game</button>
      <button>Compare Averages</button>
    </div>
  );
};

export default PlayerStatsOptions;
