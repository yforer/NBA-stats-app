import { Fragment } from "react";
import { Link } from "react-router-dom";
import useRoveFocus from "../../hooks/useRoveFocus";
import PlayerSearchItem from "./PlayerSearchItem";

const PlayersSearchList = (props) => {
  const [focus, setFocus] = useRoveFocus(props.playersList.data.length);

  // const content = props.playersList.data.map((player) => (
  //   <li key={player.id}>
  //     <Link to={`/players/${player.first_name}-${player.last_name}`}>
  //       {`${player.first_name} ${player.last_name}`}
  //     </Link>
  //   </li>
  // ));
  // return <Fragment>{content}</Fragment>;
  return (
    <ul>
      {props.playersList.data.map((player, index) => (
        <PlayerSearchItem
          key={player.id}
          setFocus={setFocus}
          index={index}
          focus={focus === index}
          player={player}
        />
      ))}
    </ul>
  );
};

export default PlayersSearchList;
