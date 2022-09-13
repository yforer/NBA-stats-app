import { Fragment } from "react";
import MainHeader from "./MainHeader";
import classes from "./Layout.module.scss";
import MainNavigation from "./MainNavigation";
import { useSelector } from "react-redux";

const Layout = (props) => {
  const isSeasonChosen = useSelector((state) => state.season.isSeasonChosen);

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.header}>
          <MainHeader />
          {isSeasonChosen && <MainNavigation />}
        </div>
      </div>
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
