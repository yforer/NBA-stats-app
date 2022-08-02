import { useRef, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const PlayerSearchItem = (props) => {
  const navigate = useNavigate();
  const ref = useRef(null);

  useEffect(() => {
    if (props.focus) {
      ref.current.focus();
    }
  }, [props.focus]);

  const handleSelect = useCallback(
    (e) => {
      if (e.key === "Enter") {
        navigate(
          `/players/${props.player.first_name}-${props.player.last_name}`
        );
      }
      props.setFocus(props.index);
    },
    [props.player, props.index, props.setFocus]
  );

  const mouseEnterHandler = useCallback((e) => {
    props.setFocus(props.index);
  });

  const mouseLeaveHandler = useCallback((e) => {
    props.setFocus(props.index);
  });

  return (
    <li
      tabIndex={props.focus ? 0 : -1}
      role="button"
      ref={ref}
      onClick={handleSelect}
      onKeyPress={handleSelect}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <Link
        to={`/players/${props.player.first_name}-${props.player.last_name}`}
      >
        {`${props.player.first_name} ${props.player.last_name}`}
      </Link>
    </li>
  );
};

export default PlayerSearchItem;
