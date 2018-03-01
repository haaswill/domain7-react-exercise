'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import { Article } from './Article';
import { Paginate } from './Paginate';
import { formatDateToReadable } from '../handlers/formatter';

const ArticleList = ({ articles, loading, onClickPage, page, totalPages }) => {
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
      {<Paginate onClickPage={onClickPage} page={page} totalPages={totalPages} />}
      {loading ? <CircularProgress /> : generateList(articles)}
      {<Paginate onClickPage={onClickPage} page={page} totalPages={totalPages} />}
    </Card>
  )
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  onClickPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number
};

export { ArticleList };