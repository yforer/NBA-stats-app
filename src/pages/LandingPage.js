import { useRef } from "react";
import homePageDrowing from "../assets/landing-drow.png";
import classes from "./LandingPage.module.css";
import { useDispatch } from "react-redux";
import { seasonActions } from "../store/season";

const LandingPage = () => {
  const dispatch = useDispatch();
  const seasonInputRef = useRef("");

  const submitSeasonHandler = (event) => {
    event.preventDefault();
    dispatch(seasonActions.seasonYear(seasonInputRef.current.value));
    dispatch(seasonActions.seasonChosen(seasonInputRef.current.value));
  };

  return (
    <div className={classes.container}>
      <div className={classes.welcome}>
        <h2>Welcome to my</h2>
        <h1>
          <span>NBA</span> Stats Website!
        </h1>
        <form onSubmit={submitSeasonHandler}>
          <div className={classes.season}>
            <label>Please choose a season:</label>
            <input
              ref={seasonInputRef}
              type="number"
              min="1999"
              max="2021"
            ></input>
            <button type="submit">Go!</button>
          </div>
        </form>
      </div>
      <div className={classes.drowing}>
        <img src={homePageDrowing}></img>
      </div>
    </div>
  );
};

export default LandingPage;
