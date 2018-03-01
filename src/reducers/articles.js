'use strict';
import {
  FETCH_ARTICLES_FAIL,
  FETCH_ARTICLES_START,
  FETCH_ARTICLES_SUCCESS
} from '../actions/types';
const initialState = {
  articles: [],
  error: {},
  loading: false,
  page: 1,
  totalPages: 1
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
        articles: action.payload.articles,
        page: action.payload.page,
        totalPages: action.payload.totalResults > 10000 ? 499 : Math.floor(action.payload.totalResults / 20),
        loading: false
      };
    case FETCH_ARTICLES_FAIL:
      return {
        ...state,
        ...initialState,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}