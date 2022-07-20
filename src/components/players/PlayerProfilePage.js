import { Fragment, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./PlayerProfilePage.module.css";
import { getPlayerProfileAPI } from "../../services/BallDontLieAPIClient";
import PlayerGeneralData from "./PlayerGeneralData";
import PlayerStatsOptions from "./PlayerStatsOptions";
import LoadingSpinner from "../UI/LoadingSpinner";

const PlayerProfilePage = () => {
  const [playerData, setPlayerData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const playerName = params.playerName.replace("-", " ");

  const getPlayerData = useCallback(async (name) => {
    try {
      setIsLoading(true);
      const data = await getPlayerProfileAPI(name);
      setPlayerData(data.data[0]);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getPlayerData(playerName);
  }, [getPlayerData]);

  return (
    <Fragment>
      {isLoading && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && playerData && (
        <div className={classes.container}>
          <PlayerGeneralData playerData={playerData} />
          <PlayerStatsOptions playerData={playerData} />
        </div>
      )}
    </Fragment>
  );
};

export default PlayerProfilePage;
