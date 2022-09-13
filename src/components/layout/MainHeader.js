import { Fragment } from "react";
import classes from "./MainHeader.module.scss";
import nbaLogo from "../../assets/nba-6.svg";
import { useDispatch, useSelector } from "react-redux";
import { seasonActions } from "../../store/season";
import { Link, useNavigate } from "react-router-dom";
import SeasonForm from "./SeasonForm";

const MainHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const seasonYear = useSelector((state) => state.season.season);

  const toHomePageHandler = () => {
    dispatch(seasonActions.init());
    navigate("/");
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logo}>
          <Link to="/" onClick={toHomePageHandler}>
            <img src={nbaLogo}></img>
          </Link>
        </div>
        {seasonYear && <h2>{`${seasonYear} - ${+seasonYear + 1}`}</h2>}
        <SeasonForm style={0} labelContent="Season:" />
      </header>
    </Fragment>
  );
};

export default MainHeader;
