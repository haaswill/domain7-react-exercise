'use strict';
import { get } from '../handlers/api';
import {
  FETCH_SOURCES_SUCCESS,
  FETCH_SOURCES_FAIL
} from "./types";

export const fetchSources = () => async dispatch => {
  try {
    const { data: { sources } } = await get('sources?');
    dispatch({ type: FETCH_SOURCES_SUCCESS, payload: sources });

  } catch (error) {
    dispatch({ type: FETCH_SOURCES_FAIL, payload: error });
  }
}