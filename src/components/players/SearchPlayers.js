import classes from "./SearchPlayers.module.css";

const SearchPlayers = () => {
  return (
    <div className={classes.search}>
      <h2>search player by name</h2>
      <input placeholder="player name"></input>
    </div>
  );
};

export default SearchPlayers;
