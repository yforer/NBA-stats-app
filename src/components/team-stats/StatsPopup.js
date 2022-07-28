import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { statsActions } from "../../store/stats";
import AllPlayerSeasonAverages from "../player-stats/AllPlayerSeasonAverages";
import PlayerGameStats from "../player-stats/PlayerGameStats";
import Modal from "../UI/Modal";
import GameStats from "./GameStats";

const StatsPopup = (props) => {
  const playerAveragesStatsChosen = useSelector(
    (state) => state.stats.playerAveragesStatsChosen
  );
  const singlePlayerGameStatsChosen = useSelector(
    (state) => state.stats.singlePlayerGameStatsChosen
  );
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

  const playerStatsContent = (
    <Fragment>
      {playerAveragesStatsChosen && (
        <AllPlayerSeasonAverages onClose={closePopup} />
      )}
      {singlePlayerGameStatsChosen && <PlayerGameStats onClose={closePopup} />}
    </Fragment>
  );

  const chosenContent =
    playerAveragesStatsChosen || singlePlayerGameStatsChosen
      ? playerStatsContent
      : gameStatsContent;

  return <Modal>{chosenContent}</Modal>;
};

export default StatsPopup;
