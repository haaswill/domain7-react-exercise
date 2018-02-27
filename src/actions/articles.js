'use strict';
import { get } from '../handlers/api';
import {
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAIL
} from "./types";

export const fetchArticles = query => async dispatch => {
  try {
    const { data } = await get(`everything?${query}&sortBy=popularity`);
    dispatch({ type: FETCH_ARTICLES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_ARTICLES_FAIL });
  }
}