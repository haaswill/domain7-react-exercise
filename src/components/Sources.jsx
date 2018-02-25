'use strict';
import React from 'react';
import PropTypes from 'prop-types';

const Sources = ({ sources }) => {
  const generateOptions = sources => {
    let list = [];
    return sources.map(source => {
      return list.push(
        <option value={source.id} key={source.id}>{source.name}</option>
      );
    });
  }
  return (
    <select name="sources" id="sources">
      {generateOptions(sources)}
    </select>
  )
};

Sources.propTypes = {
  sources: PropTypes.array.isRequired
};

export { Sources };