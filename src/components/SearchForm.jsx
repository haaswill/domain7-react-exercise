'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { Sources } from './Sources';

const SearchForm = ({ query, onChangeQuery, sources, fromDate, onChangeFromDate, toDate, onChangeToDate }) => {
  return (
    <div className="search-form">
      <label htmlFor="query">Topic:</label>
      <input className="input" name="query" type="text" onChange={onChangeQuery} value={query} />
      <Sources sources={sources} />
      <input className="input date" name="fromDate" type="date" onChange={onChangeFromDate} value={fromDate} />
      <input className="input date" name="toDate" type="date" onChange={onChangeToDate} value={toDate} />
    </div>
  );
}

SearchForm.propTypes = {
  query: PropTypes.string.isRequired,
  onChangeQuery: PropTypes.func.isRequired,
  sources: PropTypes.array.isRequired,
  fromDate: PropTypes.string,
  onChangeFromDate: PropTypes.func.isRequired,
  toDate: PropTypes.string,
  onChangeToDate: PropTypes.func.isRequired
};

export { SearchForm };