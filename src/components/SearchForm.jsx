'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { cyan500 } from 'material-ui/styles/colors';
import { Card, CardActions, CardText, CardTitle } from 'material-ui/Card';
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
    <Card style={{ marginBottom: 20 }}>
      <CardTitle
        title="SEARCH NEWS"
        titleColor={cyan500}
        titleStyle={{ textAlign: 'center' }}
      />
      <CardText
        style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}
      >
        <TextField
          floatingLabelText="Topic"
          floatingLabelFixed
          hintText="Memes"
          onChange={onChangeQuery}
          value={query}
        />
        <br />
        <Sources
          onChangeSource={onChangeSource}
          source={source}
          sources={sources}
        />
        <CardText
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <DatePicker
            autoOk
            firstDayOfWeek={0}
            floatingLabelText="From"
            locale="en-US"
            onChange={onChangeFromDate}
            style={{ margin: 5 }}
            value={fromDate}
          />
          <DatePicker
            autoOk
            firstDayOfWeek={0}
            floatingLabelText="To"
            locale="en-US"
            minDate={fromDate}
            onChange={onChangeToDate}
            style={{ margin: 5 }}
            value={toDate}
          />
        </CardText>
      </CardText>
      <CardActions
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <FlatButton
          disabled={!query}
          label="Search"
          onClick={onSubmit}
          primary
        />
      </CardActions>
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
  source: PropTypes.any,
  onChangeSource: PropTypes.func.isRequired
};

export { SearchForm };