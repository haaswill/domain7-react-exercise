'use strict';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import {
  fetchArticles,
  fetchSources
} from '../../actions';
import { SearchForm } from '../SearchForm';
import { ArticleList } from '../ArticleList';

class Dashboard extends Component {
  state = {
    loading: false,
    query: '',
    fromDate: null,
    toDate: null,
    source: '0'
  }

  componentDidMount() {
    this.fetchSources();
  }

  fetchArticles = () => this.props.fetchArticles();

  fetchSources = () => this.props.fetchSources();

  handleChangeFromDate = (e, fromDate) => this.setState({ fromDate });

  handleChangeQuery = (e, query) => this.setState({ query });

  handleChangeSource = (e, source) => this.setState({ source });

  handleChangeToDate = (e, toDate) => this.setState({ toDate });

  render() {
    const {
      loading,
      query,
      fromDate,
      toDate,
      source
    } = this.state;
    const {
      articles,
      fetchArticles,
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
          onSubmit={fetchArticles}
          query={query}
          source={source}
          sources={sources}
          toDate={toDate}
        />
        <ArticleList articles={articles} />
      </div>
    );
  }
}

Dashboard.propTypes = {
  articles: PropTypes.array.isRequired,
  fetchArticles: PropTypes.func.isRequired,
  fetchSources: PropTypes.func.isRequired,
  sources: PropTypes.array
};

const mapStateToProps = ({ articlesReducer: { articles }, sourcesReducer: { sources } }) => {
  return { articles, sources };
};

export default withRouter(connect(mapStateToProps, {
  fetchArticles,
  fetchSources
})(Dashboard));
