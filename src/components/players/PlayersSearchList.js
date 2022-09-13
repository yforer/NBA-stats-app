import useRoveFocus from "../../hooks/useRoveFocus";
import PlayerSearchItem from "./PlayerSearchItem";

const PlayersSearchList = (props) => {
  const [focus, setFocus] = useRoveFocus(props.playersList.data.length);

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
