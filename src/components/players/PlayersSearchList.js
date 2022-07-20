import { Fragment } from "react";
import { Link } from "react-router-dom";

const PlayersSearchList = (props) => {
  const content = props.playersList.data.map((player) => (
    <li key={player.id}>
      <Link to={`/players/${player.first_name}-${player.last_name}`}>
        {`${player.first_name} ${player.last_name}`}
      </Link>
    </li>
  ));
  return <Fragment>{content}</Fragment>;
};

export default PlayersSearchList;
