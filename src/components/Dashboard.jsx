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
    toDate: new Date(),
    source: null
  }

  componentDidMount() {
    this.fetchSources();
  }

  fetchArticles = (query, fromDate, toDate, source, page) => this.props.fetchArticles(query, fromDate, toDate, source, page);

  fetchSources = () => this.props.fetchSources();

  handleChangeFromDate = (e, fromDate) => {
    let toDate = this.state.toDate;
    if (toDate < fromDate) {
      toDate = null;
    }
    this.setState({ fromDate, toDate });
  }

  handleChangeQuery = (e, query) => this.setState({ query });

  handleChangeSource = (e, index, source) => this.setState({ source });

  handleChangeToDate = (e, toDate) => this.setState({ toDate });

  handleOnClickPage = (page) => {
    const { query, fromDate, toDate, source } = this.state;
    this.fetchArticles(query, fromDate, toDate, source, page);
  }

  render() {
    const {
      fromDate,
      query,
      source,
      toDate,
    } = this.state;
    const {
      articles,
      loading,
      sources,
      page,
      totalPages
    } = this.props;
    return (
      <div>
        <SearchForm
          fromDate={fromDate}
          onChangeFromDate={this.handleChangeFromDate}
          onChangeQuery={this.handleChangeQuery}
          onChangeSource={this.handleChangeSource}
          onChangeToDate={this.handleChangeToDate}
          onSubmit={() => this.fetchArticles(query, fromDate, toDate, source, page)}
          query={query}
          source={source}
          sources={sources}
          toDate={toDate}
        />
        {(articles.length > 0 || loading) && <ArticleList articles={articles} loading={loading} onClickPage={this.handleOnClickPage} page={page} totalPages={totalPages} />}
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
  page: PropTypes.number.isRequired,
  sources: PropTypes.array,
  totalPages: PropTypes.number
};

const mapStateToProps = ({ articlesReducer: { articles, loading, page, totalPages }, sourcesReducer: { sources } }) => {
  return { articles, loading, page, sources, totalPages };
};

export default withRouter(connect(mapStateToProps, {
  fetchArticles,
  fetchSources
})(Dashboard));
