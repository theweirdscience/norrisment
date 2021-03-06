import { Action, ActionFactory } from ".";

export const FETCH_RANDOM_JOKE_REQUEST = "FETCH_RANDOM_JOKE_REQUEST";

export const fetchRandomJokeRequest: ActionFactory = (data: any): Action => {
  return {
    type: FETCH_RANDOM_JOKE_REQUEST,
    payload: data
  };
};

export const FETCH_RANDOM_JOKE_COMPLETE = "FETCH_RANDOM_JOKE_COMPLETE";

export const fetchRandomJokeComplete: ActionFactory = (data: any): Action => {
  return {
    type: FETCH_RANDOM_JOKE_COMPLETE,
    payload: data
  };
};

export const CLEAR_RANDOM_JOKE = "CLEAR_RANDOM_JOKE";

export const clearRandomJoke: ActionFactory = (): Action => {
  return {
    type: CLEAR_RANDOM_JOKE
  };
};
