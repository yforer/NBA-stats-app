import { useSelector, useDispatch } from "react-redux";
import { statsActions } from "../../store/stats";
import Modal from "./Modal";

const StatsPopup = () => {
  const dispatch = useDispatch();

  return <Modal>{"hiii"}</Modal>;
};

export default StatsPopup;
