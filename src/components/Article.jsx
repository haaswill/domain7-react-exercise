'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardText, CardTitle } from 'material-ui/Card';

const Article = ({ title, image, description, author, datetime }) => (
  <Card style={{ margin: 5 }}>
    <CardMedia overlay={<CardTitle title={title} subtitle={`By ${author} - Published on ${datetime}`} />}>
      <img src={image} />
    </CardMedia>
    <CardText>
      {description}
    </CardText>
  </Card>
);

Article.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  datetime: PropTypes.string
}

export { Article };