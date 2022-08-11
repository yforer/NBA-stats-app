import homePageDrowing from "../assets/landing-drow.png";
import classes from "./LandingPage.module.css";
import SeasonForm from "../components/layout/SeasonForm";

const LandingPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.welcome}>
        <h2>Welcome to my</h2>
        <h1>
          <span>NBA</span> Stats Website!
        </h1>
        <SeasonForm style={1} labelContent="Please Choose a season:" />
      </div>
      <div className={classes.drowing}>
        <img src={homePageDrowing}></img>
      </div>
    </div>
  );
};

export default LandingPage;
