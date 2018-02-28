'use strict';
import {
  FETCH_ARTICLES_FAIL,
  FETCH_ARTICLES_START,
  FETCH_ARTICLES_SUCCESS
} from '../actions/types';
const initialState = {
  articles: [],
  error: {},
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload,
        loading: false
      };
    case FETCH_ARTICLES_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}