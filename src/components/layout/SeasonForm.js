import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { seasonActions } from "../../store/season";
import classes from "./SeasonForm.module.css";

const SeasonForm = (props) => {
  const season = useSelector((state) => state.season.localSeasonInput);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitSeasonHandler = (event) => {
    event.preventDefault();
    dispatch(seasonActions.seasonYear(event.currentTarget[0].value));
    dispatch(seasonActions.seasonChosen(event.currentTarget[0].value));
    navigate("/teams");
  };

  const changeSeasonHandler = (event) => {
    dispatch(seasonActions.setLocalSeasonInput(event.target.value));
  };

  return (
    <form onSubmit={submitSeasonHandler}>
      <div className={props.style === 0 ? classes.season : classes.season2}>
        <label>{props.labelContent}</label>
        <input
          onChange={changeSeasonHandler}
          value={season}
          type="number"
          min="1999"
          max="2021"
        ></input>
        <button type="submit">Go!</button>
      </div>
    </form>
  );
};

export default SeasonForm;
