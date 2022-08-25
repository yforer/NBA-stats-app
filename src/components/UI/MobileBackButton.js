import classes from "../teams/TeamSeasonStats.module.scss";
import { IoIosArrowBack } from "react-icons/io";
import classes2 from "../players/PlayerProfilePage.module.scss";

const MobileBackButton = (props) => {
  return (
    <button
      className={
        props.isTeams ? classes["mobile-button"] : classes2["mobile-button"]
      }
      onClick={props.action}
    >
      <IoIosArrowBack size={28} />
    </button>
  );
};

export default MobileBackButton;
