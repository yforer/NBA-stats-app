import { teamsLogos } from "../components/teams/TeamsLogos";

const sortDataByDates = (data) =>
  data.slice().sort((game1, game2) => {
    return game2.game.date > game1.game.date
      ? -1
      : game2.game.date < game1.game.date
      ? 1
      : 0;
  });

const formatDate = (chosenDate) => {
  const isoDate = chosenDate;
  const date = new Date(isoDate);

  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    month: "long",
    day: "2-digit",
  }).format(date);
  return formattedDate;
};

const formatMinAndMaxDates = (chosenDate) => {
  const day = chosenDate.getDate();
  let month = chosenDate.getMonth() + 1;
  const year = chosenDate.getFullYear();
  if (month < 10) {
    month = `0${month}`;
  }
  return `${year}-${month}-${day}`;
};

export const formatDateForCompare = (inputDate, seasonYear) => {
  const date = new Date(inputDate);
  const day = date.getDate();
  let month = date.getMonth() + 1;
  const year = month > 7 ? seasonYear : +seasonYear + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  return `${year}-${month}-${day}`;
};

export const createGameLinkData = (data) => {
  const sortedData = sortDataByDates(data);
  const minDate = formatMinAndMaxDates(new Date(sortedData[0].game.date));
  const maxDate = formatMinAndMaxDates(
    new Date(sortedData[sortedData.length - 1].game.date)
  );
  const formattedData = sortedData.map((game) => {
    return {
      id: game.game.id,
      date: formatDate(game.game.date),
      homeTeam: teamsLogos.find((team) => team.numId === game.game.home_team_id)
        .name,
      visitorTeam: teamsLogos.find(
        (team) => team.numId === game.game.visitor_team_id
      ).name,
    };
  });

  return {
    formattedData: formattedData,
    minDate: minDate,
    maxDate: maxDate,
  };
};
