import { Fragment, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { playerActions } from "../../store/player";
import classes from "./PlayerProfilePage.module.css";
import PlayerSeasonAverages from "./PlayerSeasonAverages";
import PlayerStatsByGame from "./PlayerStatsByGame";
import LoadingSpinner from "../UI/LoadingSpinner";
import { getPlayerProfileData } from "../../services/playersProfileService";
import { useNavigate } from "react-router-dom";
import LogoComp from "../UI/LogoComp";

const PlayerProfilePage = () => {
  const dispatch = useDispatch();
  const [playerData, setPlayerData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const seasonYear = useSelector((state) => state.season.season);
  const params = useParams();
  const playerName = params.playerName.replace("-", " ");
  const navigate = useNavigate();

  const backToPlayersHandler = () => {
    navigate("/players");
    dispatch(playerActions.initPlayerData());
  };

  const getPlayerData = useCallback(async (playerName, seasonYear) => {
    try {
      setIsLoading(true);
      const data = await getPlayerProfileData(playerName, seasonYear);
      setPlayerData(data);

      dispatch(
        playerActions.savePlayerData({
          name: playerName,
          team: data.playerSeasonGamesStats[0].team.abbreviation.toLowerCase(),
        })
      );
      dispatch(playerActions.savePlayerAverages(data.playerSeasonAverages));
      dispatch(playerActions.savePlayerGamesStats(data.playerSeasonGamesStats));
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getPlayerData(playerName, seasonYear);
  }, [getPlayerData, playerName, seasonYear]);

  return (
    <Fragment>
      {isLoading && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && playerData && (
        <div className={classes.container}>
          <div className={classes.info}>
            <button
              onClick={backToPlayersHandler}
            >{`< Back to players page`}</button>
            <h1>{playerName}</h1>
            <LogoComp
              id={playerData.playerSeasonGamesStats[0].team.abbreviation.toLowerCase()}
            />
          </div>
          <div className={classes.sections}>
            <PlayerSeasonAverages
              playerAverages={playerData.playerSeasonAverages}
            />
            <PlayerStatsByGame
              playerGamesStats={playerData.playerSeasonGamesStats}
            />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default PlayerProfilePage;
