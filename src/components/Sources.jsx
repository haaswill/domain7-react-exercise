'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const Sources = ({ sources, source, onChangeSource }) => {
  const generateOptions = sources => {
    let list = [];
    sources.forEach(source => {
      list.push(
        <MenuItem
          key={source.id}
          primaryText={source.name}
          value={source.id}
        />
      );
    });
    return list;
  }
  return (
    <SelectField
      floatingLabelText="Sources"
      onChange={onChangeSource}
      value={source}
    >
      <MenuItem
        key="0"
        primaryText="Select a source"
        value="0"
      />
      {generateOptions(sources)}
    </SelectField>
  )
};

Sources.propTypes = {
  sources: PropTypes.array.isRequired,
  onChangeSource: PropTypes.func.isRequired,
  source: PropTypes.string.isRequired
};

export { Sources };