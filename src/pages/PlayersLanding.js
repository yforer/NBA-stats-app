import { Fragment, useEffect } from "react";
import LeadingPlayers from "../components/players/LeadingPlayers";
import SearchPlayers from "../components/players/SearchPlayers";

const PlayersLanding = () => {
  return (
    <Fragment>
      <SearchPlayers />
      <LeadingPlayers />
    </Fragment>
  );
};

export default PlayersLanding;
