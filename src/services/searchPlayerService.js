import { getPlayersSearchResultsAPI } from "./BallDontLieAPIClient";

export const getPlayersSearchResults = async (text) => {
  return await getPlayersSearchResultsAPI(text);
};
