'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import { Article } from './Article';
import { formatDateToReadable } from '../handlers/formatter';

const ArticleList = ({ articles, loading }) => {
  const generateList = articles => {
    let list = [];
    articles.forEach(({ author, publishedAt, description, urlToImage, url, title }) => {
      list.push(
        <Article
          author={author}
          datetime={formatDateToReadable(publishedAt)}
          description={description}
          image={urlToImage}
          key={url}
          title={title}
          url={url}
        />
      );
    });
    return list;
  }

  return (
    <Card style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', padding: 50 }}>
      {loading ? <CircularProgress /> : generateList(articles)}
    </Card>
  )
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export { ArticleList };