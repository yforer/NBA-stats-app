import { Fragment, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { playerActions } from "../../store/player";
import classes from "./PlayerProfilePage.module.scss";
import PlayerSeasonAverages from "./PlayerSeasonAverages";
import PlayerStatsByGame from "./PlayerStatsByGame";
import LoadingSpinner from "../UI/LoadingSpinner";
import { getPlayerProfileData } from "../../services/playersProfileService";
import { useNavigate } from "react-router-dom";
import LogoComp from "../UI/LogoComp";
import MobileBackButton from "../UI/MobileBackButton";

const PlayerProfilePage = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [playerData, setPlayerData] = useState("");
  const playerGeneralData = useSelector((state) => state.player.playerData);
  const playerAverages = useSelector((state) => state.player.playerAverages);
  const playerGamesStats = useSelector(
    (state) => state.player.playerGamesStats
  );
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
      if (
        data.playerSeasonAverages === undefined ||
        data.playerSeasonGamesStats.length === 0
      ) {
        alert("Chosen player did not play that season");
        backToPlayersHandler();
      } else {
        setPlayerData(data);

        dispatch(
          playerActions.savePlayerData({
            name: playerName,
            team: data.playerSeasonGamesStats[0].team.abbreviation.toLowerCase(),
          })
        );
        dispatch(playerActions.savePlayerAverages(data.playerSeasonAverages));
        dispatch(
          playerActions.savePlayerGamesStats(data.playerSeasonGamesStats)
        );
      }
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
            <MobileBackButton action={backToPlayersHandler} isTeams={false} />
            <h2>{playerName}</h2>
            <LogoComp id={playerGeneralData.team} />
          </div>
          <div className={classes.sections}>
            <PlayerSeasonAverages playerAverages={playerAverages} />
            <PlayerStatsByGame playerGamesStats={playerGamesStats} />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default PlayerProfilePage;
