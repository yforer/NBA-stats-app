import classes from "./PlayerSeasonAverages.module.scss";
import { formatAveragesSectionContent } from "../../services/playersProfileService";
import { useDispatch } from "react-redux";
import { statsActions } from "../../store/stats";
import { BsArrowDownShort, BsArrowRightShort } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { Fragment } from "react";

const PlayerSeasonAverages = (props) => {
  const dispatch = useDispatch();
  const averagesSummary = formatAveragesSectionContent(props.playerAverages);

  const showAllPlayerSeasonHandler = () => {
    dispatch(statsActions.showStatsHandler());
    dispatch(statsActions.playerAveragesStatsChosenHandler());
  };

  const content = (
    <Fragment>
      <div className={classes.category}>
        <BsArrowRightShort color="orange" size={28} />
        <GoPrimitiveDot color="orange" size={28} />
        <p className={classes["category-name"]}>
          {averagesSummary[0].category}
        </p>
        <p className={classes["category-value"]}>{averagesSummary[0].value}</p>
      </div>
      <div className={classes.category}>
        <BsArrowDownShort color="orange" size={28} />
        <GoPrimitiveDot color="orange" size={28} />
        <p className={classes["category-name"]}>
          {averagesSummary[2].category}
        </p>
        <p className={classes["category-value"]}>{averagesSummary[2].value}</p>
      </div>
      <div className={classes.category}>
        <GoPrimitiveDot color="orange" size={28} />
        <BsArrowRightShort color="orange" size={28} />
        <p className={classes["category-name"]}>
          {averagesSummary[1].category}
        </p>
        <p className={classes["category-value"]}>{averagesSummary[1].value}</p>
      </div>
    </Fragment>
  );

  return (
    <div className={classes.averages}>
      <h3>Season Averages</h3>
      <div className={classes.categories}>{content}</div>
      <button onClick={showAllPlayerSeasonHandler}>Show all averages</button>
    </div>
  );
};

export default PlayerSeasonAverages;
