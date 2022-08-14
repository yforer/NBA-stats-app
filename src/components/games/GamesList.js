import GameItem from "./GameItem";

const GamesList = (props) => {
  return (
    <ul>
      {props.games.map((game) => (
        <GameItem
          homeTeamScore={game.home_team_score}
          visitorTeamScore={game.visitor_team_score}
          homeTeamId={game.home_team.id}
          visitorTeamId={game.visitor_team.id}
          date={game.date}
          key={game.id}
          id={game.id}
        />
      ))}
    </ul>
  );
};

export default GamesList;
