import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { statsActions } from "../../store/stats";
import Modal from "./Modal";
import GameStats from "./GameStats";

const StatsPopup = (props) => {
  const dispatch = useDispatch();

  const closePopup = () => {
    dispatch(statsActions.hideStatsHandler());
    dispatch(statsActions.initiateStatsChosen());
  };

  const gameStatsContent = (
    <Fragment>
      <GameStats onClose={closePopup} />
    </Fragment>
  );

  return <Modal>{gameStatsContent}</Modal>;
};

export default StatsPopup;
