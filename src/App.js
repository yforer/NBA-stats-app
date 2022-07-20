import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Layout from "./components/layout/Layout";
import PlayersLanding from "./pages/PlayersLanding";
import TeamsLanding from "./pages/TeamsLanding";
import TeamGamesPage from "./components/teams/TeamGamesPage";
import { Fragment } from "react";
import StatsPopup from "./components/stats/StatsPopup";
import { useSelector } from "react-redux";
import PlayerProfilePage from "./components/players/PlayerProfilePage";

function App() {
  let statsIsShowen = useSelector((state) => state.stats.statsIsShowen);

  return (
    <Fragment>
      {statsIsShowen && <StatsPopup />}
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/players" element={<PlayersLanding />} />
          <Route path="/teams" element={<TeamsLanding />} />
          <Route path="/teams/:teamId" element={<TeamGamesPage />} />
          <Route path="/players/:playerName" element={<PlayerProfilePage />} />
        </Routes>
      </Layout>
    </Fragment>
  );
}

export default App;
