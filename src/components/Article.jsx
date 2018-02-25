'use strict';
import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, image, description, author, date }) => (
  <div className="article">
    <img src={image} />
    <div className="article-details">
      <h2 className="article-title">{title}</h2>
      <p className="article-description">{description}</p>
    </div>
    <div className="article-footer">
      <p>By {author} - {date}</p>
    </div>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string
}

export { Article };