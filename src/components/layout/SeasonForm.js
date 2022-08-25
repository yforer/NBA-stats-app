import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { seasonActions } from "../../store/season";
import classes from "./SeasonForm.module.scss";

const SeasonForm = (props) => {
  const season = useSelector((state) => state.season.localSeasonInput);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const submitSeasonHandler = (event) => {
    event.preventDefault();
    if (event.currentTarget[0].value === "") {
      alert("Please choose a season!");
      return;
    }
    dispatch(seasonActions.seasonYear(event.currentTarget[0].value));
    dispatch(seasonActions.seasonChosen(event.currentTarget[0].value));
    navigate("/teams");
  };

  const changeSeasonHandler = (event) => {
    dispatch(seasonActions.setLocalSeasonInput(event.target.value));
  };

  useEffect(() => {
    if (location.pathname === "/") {
      dispatch(seasonActions.init());
    }
  }, []);

  return (
    <form onSubmit={submitSeasonHandler}>
      <div className={props.style === 0 ? classes.season : classes.season2}>
        <div className={classes.action}>
          <label>{props.labelContent}</label>
          <input
            onChange={changeSeasonHandler}
            value={season}
            type="number"
            min="1999"
            max="2021"
          ></input>
        </div>
        <button type="submit">Go!</button>
      </div>
    </form>
  );
};

export default SeasonForm;
