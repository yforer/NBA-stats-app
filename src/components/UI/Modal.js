import classes from "./Modal.module.scss";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import { statsActions } from "../../store/stats";
import { useDispatch } from "react-redux";

const Backdrop = () => {
  const dispatch = useDispatch();

  const closePopup = () => {
    dispatch(statsActions.hideStatsHandler());
    dispatch(statsActions.initiateStatsChosen());
  };

  return <div className={classes.backdrop} onClick={closePopup}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
