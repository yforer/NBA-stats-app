import { Fragment, useState, useRef } from "react";
import classes from "./MainHeader.module.css";
import nbaLogo from "../../assets/nba-6.svg";
import { useDispatch, useSelector } from "react-redux";
import { seasonActions } from "../../store/season";
import { Link, useNavigate } from "react-router-dom";

const MainHeader = (props) => {
  const seasonInputRef = useRef();
  const dispatch = useDispatch();
  const season = useSelector((state) => state.season.season);
  let navigate = useNavigate("/");

  const submitSeasonHandler = (event) => {
    event.preventDefault();
    dispatch(seasonActions.seasonYear(seasonInputRef.current.value));
    dispatch(seasonActions.seasonChosen(seasonInputRef.current.value));
    navigate("/");
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logo}>
          <Link to="/">
            <img src={nbaLogo}></img>
          </Link>
        </div>
        <form onSubmit={submitSeasonHandler}>
          <div className={classes.season}>
            <label>Season:</label>
            <input
              ref={seasonInputRef}
              type="number"
              min="1999"
              max="2021"
            ></input>
            <button type="submit">Go!</button>
          </div>
        </form>
      </header>
    </Fragment>
  );
};

export default MainHeader;
