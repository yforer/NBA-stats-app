import classes from "./PlayerGeneralData.module.css";

const PlayerGeneralData = (props) => {
  console.log(props.playerData);
  return (
    <div className={classes.info}>
      <h1>{`${props.playerData.first_name} ${props.playerData.last_name}`}</h1>
    </div>
  );
};

export default PlayerGeneralData;
