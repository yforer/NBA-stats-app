import { CgClose } from "react-icons/cg";
import classes from "./CloseButton.module.scss";

const CloseButton = (props) => {
  return (
    <button className={classes.btn} onClick={props.onClose}>
      <CgClose size={20} />
    </button>
  );
};

export default CloseButton;
