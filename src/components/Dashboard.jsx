'use strict';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';
import {
  fetchArticles,
  fetchSources
} from '../actions';
import { SearchForm } from './SearchForm';
import { ArticleList } from './ArticleList';

class Dashboard extends Component {
  state = {
    query: '',
    fromDate: null,
    toDate: null,
    source: null
  }

  componentDidMount() {
    this.fetchSources();
  }

  fetchArticles = (query, fromDate, toDate, source) => this.props.fetchArticles(query, fromDate, toDate, source);

  fetchSources = () => this.props.fetchSources();

  handleChangeFromDate = (e, fromDate) => this.setState({ fromDate });

  handleChangeQuery = (e, query) => this.setState({ query });

  handleChangeSource = (e, index, source) => this.setState({ source });

  handleChangeToDate = (e, toDate) => this.setState({ toDate });

  render() {
    const {
      query,
      fromDate,
      toDate,
      source
    } = this.state;
    const {
      articles,
      loading,
      sources
    } = this.props;
    return (
      <div>
        <SearchForm
          fromDate={fromDate}
          onChangeFromDate={this.handleChangeFromDate}
          onChangeQuery={this.handleChangeQuery}
          onChangeSource={this.handleChangeSource}
          onChangeToDate={this.handleChangeToDate}
          onSubmit={() => this.fetchArticles(query, fromDate, toDate, source)}
          query={query}
          source={source}
          sources={sources}
          toDate={toDate}
        />
        {(articles.length > 0 || loading) && <ArticleList articles={articles} loading={loading} />}
        <Snackbar
          message="Topic cannot be empty!"
          onRequestClose={() => null}
          open={!query}
        />
      </div>
    );
  }
}

Dashboard.propTypes = {
  articles: PropTypes.array.isRequired,
  fetchArticles: PropTypes.func.isRequired,
  fetchSources: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  sources: PropTypes.array
};

const mapStateToProps = ({ articlesReducer: { articles, loading }, sourcesReducer: { sources } }) => {
  return { articles, loading, sources };
};

export default withRouter(connect(mapStateToProps, {
  fetchArticles,
  fetchSources
})(Dashboard));
