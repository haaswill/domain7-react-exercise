'use strict';
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { SearchForm } from './SearchForm';
import { ArticleList } from './ArticleList';

class App extends Component {
  state = {
    query: '',
    fromDate: '',
    toDate: '',
    articles: []
  }

  render() {
    const {
      query,
      fromDate,
      toDate,
      articles
    } = this.state;
    return (
      <MuiThemeProvider>
        <SearchForm
          query={query}
          onChangeQuery={}

        />
        <ArticleList articles={articles} />
      </MuiThemeProvider>
    );
  }
}

export default App;