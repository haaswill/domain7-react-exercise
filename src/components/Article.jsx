'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardText, CardTitle } from 'material-ui/Card';

const Article = ({ title, image, description, author, datetime, url }) => (
  <Card style={{ margin: 10, maxWidth: 800 }}>
    <a href={url} target="_blank" style={{ textDecoration: 'none' }}>
      <CardMedia overlay={<CardTitle title={title} subtitle={`By ${author} - Published on ${datetime}`} />}>
        <img src={image} />
      </CardMedia>
      <CardText>
        {description}
      </CardText>
    </a>
  </Card>
);

Article.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  datetime: PropTypes.string,
  url: PropTypes.string.isRequired
}

export { Article };