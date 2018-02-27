'use strict';
import {
  FETCH_ARTICLES_FAIL,
  FETCH_ARTICLES_SUCCESS
} from '../actions/types';
const initialState = {
  articles: [],
  error: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload
      };
    case FETCH_ARTICLES_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}