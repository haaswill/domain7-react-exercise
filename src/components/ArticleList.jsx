'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import { formatDate } from '../handlers/formatter';

const ArticleList = ({
  articles
}) => {
  const generateList = article => {
    let list = [];
    return articles.map(article, () => {
      return list.push(
        <Article
          title={article.title}
          image={article.urlToImage}
          description={article.description}
          author={article.author}
          date={formatDate(article.date)}
        />
      );
    });
  }

  return (
    <div className="articles">
      {generateList(articles)}
    </div>
  )
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};

export { ArticleList };