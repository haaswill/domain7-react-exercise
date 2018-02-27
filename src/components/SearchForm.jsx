'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';
import { Sources } from './Sources';

const SearchForm = ({
  fromDate,
  onChangeFromDate,
  onChangeQuery,
  onChangeSource,
  onChangeToDate,
  onSubmit,
  query,
  toDate,
  source,
  sources
}) => {
  return (
    <Card>
      <CardHeader title="Search News" />
      <TextField
        floatingLabelText="Topic"
        hintText="Memes"
        onChange={onChangeQuery}
        value={query}
      />
      <Sources
        onChangeSource={onChangeSource}
        source={source}
        sources={sources}
      />
      <DatePicker
        autoOk
        firstDayOfWeek={0}
        floatingLabelText="From"
        locale="en-US"
        onChange={onChangeFromDate}
        value={fromDate}
      />
      <DatePicker
        autoOk
        firstDayOfWeek={0}
        floatingLabelText="To"
        locale="en-US"
        minDate={fromDate}
        onChange={onChangeToDate}
        value={toDate}
      />
      <FlatButton
        label="Search"
        onClick={onSubmit}
        primary
      />
    </Card>
  );
}

SearchForm.propTypes = {
  query: PropTypes.string.isRequired,
  onChangeQuery: PropTypes.func.isRequired,
  sources: PropTypes.array.isRequired,
  fromDate: PropTypes.instanceOf(Date),
  onChangeFromDate: PropTypes.func.isRequired,
  toDate: PropTypes.instanceOf(Date),
  onChangeToDate: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  source: PropTypes.string.isRequired,
  onChangeSource: PropTypes.func.isRequired
};

export { SearchForm };