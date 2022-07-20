import classes from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={classes.welcome}>
      <h1>Welcome to my NBA stats website!</h1>
      <p>Please choose a season</p>
    </div>
  );
};

export default LandingPage;
